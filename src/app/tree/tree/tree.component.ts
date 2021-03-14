import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MonarchsService } from 'src/app/services/monarchs.service';
import { Monarch } from 'src/app/shared/models/monarch';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input() monarch: Monarch;
  @Output() onLeafSelected: EventEmitter<Monarch> = new EventEmitter();
  @Output() onLeafChanged: EventEmitter<Monarch> = new EventEmitter();

  addingReinforcing = false;
  allMembers: Monarch[] = [];

  constructor(private monarchsService: MonarchsService) { }

  ngOnInit(): void {
  }

  _leafSelected(_leaf) {
    this.onLeafSelected.emit(_leaf);
  }

  _leafChanged() {
    this.onLeafChanged.emit(this.monarch);
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

  addReinforcing() {
    this.addingReinforcing = true;
    this.allMembers = this.monarchsService.getAllMonarchs();
  }

  isAlreadyReinforcing(member: Monarch) {
    return this.monarch.reinforcing.some(x => x === member);
  }

  cancelAddReinforcing() {
    this.addingReinforcing = false;
  }

  addReinforced(member: Monarch) {
    member.reinforcedBy = this.monarch;
    this.addingReinforcing = false;
    this.onLeafChanged.emit(this.monarch);
  }
}
