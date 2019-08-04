import { Injectable } from '@angular/core';
import {  HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProfessorService {
  json:any = null;
  token:any= null;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  sendSchedule(schedule:any){
    console.log("Send schedule: "+schedule+".");
    this.json["schedule"] = schedule;
    var json  = this.json;
    this.json = null;
    console.log(json);
    return this.http.post(environment.apiURL + 'teacher/#{{this.token}}', json);
  }
  getSchedule(){
    console.log("Get Schedule.");
    this.loadJson();
    //return this.json['schedule'];
     return [["Jueves", "11-1"],["Viernes", "9-11"],["Lunes", "7-9"],["Lunes", "9-11"],["Martes", "9-11"],["Miercoles", "11-1"],["Miercoles", "2-4"],["Viernes", "2-4"]];
  }
  getElective(){
    console.log("Get Elective.");
    this.loadJson();
    return this.json['elective'];
  }
  loadJson(){
    if(this.json == null){
      this.json = {
        "elective":{"name":"Sistemas inteligentes"},
        "schedule": {}
      };//this.json =  this.http.get(environment.apiURL + 'teacher/#{{this.token}}');
    }
  }
  setToken(token:any){
    console.log("token: ",token);
    this.token = token;
    return true;
  }
}
