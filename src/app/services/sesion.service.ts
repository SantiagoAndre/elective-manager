import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx"
import { User } from '../interface/user'
import {  HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class SesionService {
  API_URI = 'http://localhost:8080/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  login(credencials: Observable<User[]>) {
    console.log("url: "+ this.API_URI + 'login');
    console.log(credencials);
    return this.http.post(this.API_URI + 'login', credencials,this.httpOptions);
  }
  getToken(email:  Observable<String[]>){
    console.log("url: "+ this.API_URI + 'getToken');
    console.log(email);
    //TODO
  }
}
