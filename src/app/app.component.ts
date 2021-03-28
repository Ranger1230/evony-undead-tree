import { CdkDragDrop, CdkDragEnter, CdkDragExit, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MonarchsService } from './services/monarchs.service';
import { Monarch } from './shared/models/monarch';
import { CosmosClient } from "@azure/cosmos";
import { Observable } from 'rxjs';

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
  allMembers: Observable<Monarch[]>;

  constructor(private monarchsService: MonarchsService) {
    console.log(this.allMembers);
    this.allMembers = monarchsService.getAllMonarchs();
    this.parentItem = new Monarch({ id: '' });
    this.allMembers.subscribe(members => {
      this.parentItem.reinforcing = members.filter(x => x.id === "devildog69" || x.id === "akira");
    });
  }

  public ngOnInit() {
    //let client = new CosmosClient(`mongodb://evony-undead-tree:Zenmnj18dIAER0DWYcbtEJYJRwA4ZESh81eP0vuNaontfUTVZ45233aL85MLk9w0yclbtRBramiEh0cpiMu7zw==@evony-undead-tree.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@evony-undead-tree@`);

    // if(window.localStorage.undeadTree) {
    //   this.parentItem = JSON.parse(window.localStorage.undeadTree);
    //   return;
    // }
    //this.allMembers.forEach(member => this.parentItem.reinforcing.push(member));
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
    const keys = Object.keys(this.parentItem).filter(x => x !== "reinforcedBy");
    window.localStorage.setItem("undeadTree", JSON.stringify(this.parentItem, keys));

    this.allMembers.subscribe(allMembers => {
      this.monarchsService.saveAllMonarchs(allMembers).subscribe(() => {}, error => {
        console.error(error);
      });
    });
  }

  treeChanged() {
    const keys = Object.keys(this.parentItem).filter(x => x !== "reinforcedBy");
    console.log(JSON.stringify(this.parentItem, keys));
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
