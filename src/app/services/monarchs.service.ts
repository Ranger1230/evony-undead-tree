import { Injectable } from '@angular/core';
import { Monarch } from '../shared/models/monarch';

@Injectable({
  providedIn: 'root'
})
export class MonarchsService {

  private allMembers: Monarch[] = [
    new Monarch({ name: "devildog69", keepLevel: 35, keepPower: 2300000000}),
    new Monarch({ name: "akira", keepLevel: 35, keepPower: 846000000}),
    new Monarch({ name: "Ranger1230", keepLevel: 31, keepPower: 82000000}),
    new Monarch({ name: "Sherway", keepLevel: 32, keepPower: 158200000}),
    new Monarch({ name: "UhohWhatNow", keepLevel: 30, keepPower: 59200000}),
    new Monarch({ name: "angel'kos", keepLevel: 26, keepPower: 20200000}),
    new Monarch({ name: "Sagaelzu", keepLevel: 29, keepPower: 53000000}),
    new Monarch({ name: "Venezuela", keepLevel: 28, keepPower: 54700000}),
    new Monarch({ name: "ematuka", keepLevel: 0, keepPower: 117400000}),
    new Monarch({ name: "Sidea", keepLevel: 0, keepPower: 96200000}),
    new Monarch({ name: "Rampaige", keepLevel: 0, keepPower: 56500000}),
    new Monarch({ name: "Robo", keepLevel: 0, keepPower: 555800000}),
    new Monarch({ name: "ghosty69", keepLevel: 0, keepPower: 30400000}),
    new Monarch({ name: "Chiao", keepLevel: 0, keepPower: 62300000}),
    new Monarch({ name: "Maxi_Miguel", keepLevel: 0, keepPower: 100200000}),
    new Monarch({ name: "shadow071", keepLevel: 0, keepPower: 463900000}),
    new Monarch({ name: "DOOMSDAY01", keepLevel: 0, keepPower: 128100000}),
    new Monarch({ name: "PURGEkids", keepLevel: 0, keepPower: 81900000}),



    //new Monarch({ name: "", keepLevel: , keepPower:  }),
  ]//.sort((x, y) => x.name.toLowerCase() > y.name.toLowerCase() ? 1 : x.name.toLowerCase() === y.name.toLowerCase() ? 0 : -1);
  .sort((y, x) => x.keepLevel > y.keepLevel ? 1 : x.keepLevel === y.keepLevel ? (x.keepPower > y.keepPower ? 1 : 0) : -1);

  constructor() { }

  getAllMonarchs(): Monarch[] {
    return this.allMembers;
  }
}
