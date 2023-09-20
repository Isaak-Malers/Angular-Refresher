import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  daysToHalloween() {
    const date: Date = new Date();
    const halloween: Date = new Date("2023-10-31"); 
    const days = (halloween.valueOf() - date.valueOf())/(24*60*60*1000);
    return Math.floor(days);
  }

  constructor() { }
}
