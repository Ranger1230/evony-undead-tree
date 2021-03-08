import { CdkDragDrop, CdkDragEnter, CdkDragExit, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Monarch } from './shared/models/monarch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public parentItem: Monarch;
  public get connectedDropListsIds(): string[] {
    // We reverse ids here to respect items nesting hierarchy
    return this.getIdsRecursive(this.parentItem).reverse();
  }
  private allMembers: Monarch[] = [
    new Monarch({ name: "devildog69", keepLevel: 35, keepPower: 2_200_000_000 }),
    new Monarch({ name: "akira", keepLevel: 35, keepPower: 1_100_000_000 }),
    new Monarch({ name: "Ranger1230", keepLevel: 31, keepPower: 81_100_000 }),
    new Monarch({ name: "Sherway", keepLevel: 32, keepPower: 123_000_000 }),
    new Monarch({ name: "UhohWhatNow", keepLevel: 30, keepPower: 50_000_000 })
  ];

  constructor() {
    console.log(this.allMembers);

    this.parentItem = new Monarch({ name: '' });
  }

  public ngOnInit() {
    if(window.localStorage.undeadTree) {
      this.parentItem = JSON.parse(window.localStorage.undeadTree);
      return;
    }
    this.allMembers.forEach(member => this.parentItem.reinforcing.push(member));
  }

  public onDragDrop(event: CdkDragDrop<Monarch>) {
    event.container.element.nativeElement.classList.remove('active');
    if (this.canBeDropped(event)) {
      const movingItem: Monarch = event.item.data;
      event.container.data.reinforcing.push(movingItem);
      event.previousContainer.data.reinforcing = event.previousContainer.data.reinforcing.filter((child) => child.uId !== movingItem.uId);
    } else {
      moveItemInArray(
        event.container.data.reinforcing,
        event.previousIndex,
        event.currentIndex
      );
    }

    console.log(JSON.stringify(this.parentItem));
  }

  save(): void {
    window.localStorage.setItem("undeadTree", JSON.stringify(this.parentItem));
  }

  private getIdsRecursive(item: Monarch): string[] {
    let ids = [item.uId];
    item.reinforcing.forEach((childItem) => { ids = ids.concat(this.getIdsRecursive(childItem)) });
    return ids;
  }

  private canBeDropped(event: CdkDragDrop<Monarch, Monarch>): boolean {
    const movingItem: Monarch = event.item.data;

    return event.previousContainer.id !== event.container.id
      && this.isNotSelfDrop(event)
      && !this.hasChild(movingItem, event.container.data);
  }

  private isNotSelfDrop(event: CdkDragDrop<Monarch> | CdkDragEnter<Monarch> | CdkDragExit<Monarch>): boolean {
    return event.container.data.uId !== event.item.data.uId;
  }

  private hasChild(parentItem: Monarch, childItem: Monarch): boolean {
    const hasChild = parentItem.reinforcing.some((item) => item.uId === childItem.uId);
    return hasChild ? true : parentItem.reinforcing.some((item) => this.hasChild(item, childItem));
  }
}
