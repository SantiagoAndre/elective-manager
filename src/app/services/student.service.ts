import { Injectable } from '@angular/core';
import {  HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
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
  selectElective(idElective){
    this.json = {
      "elective":{"name":"Sistemas inteligentes","idElective":"AAAA"},
      "schedule": {}
    };//this.json =  this.http.get(environment.apiURL + 'student/#{{this.token}}');
  }
  getSchedule(){
    console.log("Get Schedule.");
    if(this.json == null){
      return null;
    }
  //  return this.json["schedule"];
    //return this.json['schedule'];
    return [["Jueves", "11-1"],["Viernes", "9-11"],["Lunes", "7-9"],["Lunes", "9-11"],["Martes", "9-11"],["Miercoles", "11-1"],["Miercoles", "2-4"],["Viernes", "2-4"]];
  }
  getElective(){
    if(this.json!=null)
      return this.json['elective'];
    return null;
  }
  getElectives(){
    return [
      {"name":"Ingenieria de requisitos","idElective":"ADAS32"},
      {"name":"Algoritmos evoulitvos","idElective":"AAAA"},
      {"name":"Metodologias agiles","idElective":"FFF3E"},
      {"name":"Seguridad informatica","idElective":"WDSDS"},
      {"name":"Maquina del tiempo","idElective":"ADAS22"}
    ];
  }

  setToken(token:any){
    console.log("token: ",token);
    this.token = token;
    return true;
  }
}
