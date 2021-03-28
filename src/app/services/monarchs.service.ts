import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Monarch } from '../shared/models/monarch';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MonarchsService {

  private allMembers: Monarch[] = [
    new Monarch({ id: "devildog69", keepLevel: 35, keepPower: 2300000000}),
    new Monarch({ id: "akira", keepLevel: 35, keepPower: 846000000}),
    new Monarch({ id: "Ranger1230", keepLevel: 31, keepPower: 82000000}),
    new Monarch({ id: "Sherway", keepLevel: 32, keepPower: 158200000}),
    new Monarch({ id: "UhohWhatNow", keepLevel: 30, keepPower: 59200000}),
    new Monarch({ id: "angel'kos", keepLevel: 26, keepPower: 20200000}),
    new Monarch({ id: "Sagaelzu", keepLevel: 29, keepPower: 53000000}),
    new Monarch({ id: "Venezuela", keepLevel: 28, keepPower: 54700000}),
    new Monarch({ id: "ematuka", keepLevel: 0, keepPower: 117400000}),
    new Monarch({ id: "Sidea", keepLevel: 0, keepPower: 96200000}),
    new Monarch({ id: "Rampaige", keepLevel: 0, keepPower: 56500000}),
    new Monarch({ id: "Robo", keepLevel: 0, keepPower: 555800000}),
    new Monarch({ id: "ghosty69", keepLevel: 0, keepPower: 30400000}),
    new Monarch({ id: "Chiao", keepLevel: 0, keepPower: 62300000}),
    new Monarch({ id: "Maxi_Miguel", keepLevel: 0, keepPower: 100200000}),
    new Monarch({ id: "shadow071", keepLevel: 0, keepPower: 463900000}),
    new Monarch({ id: "DOOMSDAY01", keepLevel: 0, keepPower: 128100000}),
    new Monarch({ id: "PURGEkids", keepLevel: 0, keepPower: 81900000}),



    //new Monarch({ name: "", keepLevel: , keepPower:  }),
  ]//.sort((x, y) => x.name.toLowerCase() > y.name.toLowerCase() ? 1 : x.name.toLowerCase() === y.name.toLowerCase() ? 0 : -1);
  .sort((y, x) => x.keepLevel > y.keepLevel ? 1 : x.keepLevel === y.keepLevel ? (x.keepPower > y.keepPower ? 1 : 0) : -1);

  constructor(private http: HttpClient) { }

  getAllMonarchs(): Observable<Monarch[]> {
    return this.http.get<Monarch[]>(`${environment.apiUri}GetMonarchs`).pipe(
      map(monarchs => {
        const missing = this.allMembers.filter(member => !monarchs.some(monarch => monarch.id === member.id));
        const allMonarchs = [...monarchs, ...missing];
        allMonarchs.forEach(monarch => {
          monarch.reinforcing = monarch.reinforcing.map(reinforcing => {
            if(typeof(reinforcing) === "string"){
              return allMonarchs.find(x => x.id.toLowerCase() === (reinforcing as string).toString().toLowerCase());
            }
            return reinforcing;
          });
        });
        return allMonarchs;
      })
    );
  }

  saveAllMonarchs(monarchs: Monarch[]): Observable<void> {
    monarchs.forEach(monarch => {
      monarch.reinforcing = monarch.reinforcing.map(reinforcing => reinforcing.id) as any;
    });
    return this.http.post<void>(`${environment.apiUri}SaveMonarchs`, monarchs);
  }
}
