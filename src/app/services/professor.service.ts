import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor() { }
  sendSchedule(schedule:any){
    console.log("Send schedule: "+schedule);
  }
}
