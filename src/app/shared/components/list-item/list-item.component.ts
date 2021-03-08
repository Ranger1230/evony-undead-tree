import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Monarch } from '../../models/monarch';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.html',
  styleUrls: ['./list-item.scss']
})
export class ListItemComponent {
  @Input() item: Monarch;
  @Input() parentItem?: Monarch;
  @Input() public set connectedDropListsIds(ids: string[]) {
    this.allDropListsIds = ids;
  }
  public get connectedDropListsIds(): string[] {
    return this.allDropListsIds.filter((id) => id !== this.item.uId);
  }
  public allDropListsIds: string[];

  public get dragDisabled(): boolean {
    return !this.parentItem;
  }

  public get parentItemId(): string {
    return this.dragDisabled ? '' : this.parentItem.uId;
  }

  powerDisplay(power: number): string {
    if(power >= 1_000_000_000) {
      return (power / 1_000_000_000).toFixed(1) + "B";
    }
    if(power >= 1_000_000) {
      return (power / 1_000_000).toFixed(1) + "M";
    }
    if(power >= 1_000) {
      return (power / 1_000).toFixed(1) + "K";
    }

    return power.toString();
  }

  @Output() itemDrop: EventEmitter<CdkDragDrop<Monarch>>

  constructor() {
    this.allDropListsIds = [];
    this.itemDrop = new EventEmitter();
  }

  public onDragDrop(event: CdkDragDrop<Monarch, Monarch>): void {
    this.itemDrop.emit(event);
  }

}
