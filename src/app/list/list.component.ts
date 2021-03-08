import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgForm } from '@angular/forms';
import { Monarch } from "../models/monarch";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  @Input() items: Monarch[] = [];
  @Output() removeing = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.removeing.emit(this.items);
  }

  removingChild(event) {
    console.log(event);
  }

  drop(event: CdkDragDrop<Monarch[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onSubmit(newItemForm: NgForm) {
    this.items.push({ name: newItemForm.value.newItem, keepLevel: 0, keepPower: 0, reinforcing: [] });
    newItemForm.reset();
  }

}
