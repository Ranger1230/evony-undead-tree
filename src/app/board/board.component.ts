import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { Monarch } from "../models/monarch";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  members: Monarch[] = [
    { name: "devildog69", keepLevel: 35, keepPower: 2_200_000_000, reinforcing: [] },
    { name: "Ranger1230", keepLevel: 31, keepPower: 81_100_000, reinforcing: [] },
    { name: "akira", keepLevel: 35, keepPower: 1_100_000_000, reinforcing: [] },
    { name: "Sherway", keepLevel: 32, keepPower: 123_000_000, reinforcing: [] }
  ];

  lists: ListComponent[] = [new ListComponent()];

  constructor() { }

  ngOnInit(): void {
  }

  addList() {
    var newList = new ListComponent();
    this.lists.push(newList);
  }
}
