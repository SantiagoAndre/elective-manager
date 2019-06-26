import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SendAvailableScheduleService {

  constructor() { }
  send(schedule:any){
    return schedule;
  }
}
