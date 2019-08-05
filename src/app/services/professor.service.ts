import { Injectable } from '@angular/core';
import {  HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProfessorService {
  json:any;
  token:any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  sendSchedule(json:any){
    console.log("Send schedule: "+json+".");
    return this.http.post(environment.apiURL + 'teacher/'+this.token,json);
    //this.loadJson();
    console.log(environment.apiURL + 'teacher/'+this.token);


  }
  getSchedule(){
    console.log("Get Schedule.");
    //this.loadJson();
    return this.json['schedule'];
     //return [["Jueves", "11-1"],["Viernes", "9-11"],["Lunes", "7-9"],["Lunes", "9-11"],["Martes", "9-11"],["Miercoles", "11-1"],["Miercoles", "2-4"],["Viernes", "2-4"]];
  }
  getElective(){
    console.log("Get Elective.");
    //this.loadJson();
    return this.json['elective'];
  }
  loadJson(){
      //this.json = {"elective":{"name":"Sistemas inteligentes"},"schedule": {}};
      return this.http.get(environment.apiURL + 'teacher/'+this.token);
      console.log(environment.apiURL + 'teacher/'+this.token);
      console.log("dresponse: "+this.json);
      return this.json;
  }
  setJson(rest){
    console.log("cambiando json por: "+rest);
    this.json = rest;
    console.log("json es: "+this.json);
  }
  setToken(token:any){
    console.log("token: ",token);
    this.token = token;
    return true;
  }
}
