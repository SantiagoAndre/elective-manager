import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx"
import { User } from '../interface/user'
import {  HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class SignInService {
  API_URI = 'http://localhost:8080';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  signInService(credencials: Observable<User[]>) {
    console.log("url: "+ this.API_URI + '/signup');
    //var params = [credencials.email,credencials.password];
    console.log(credencials);
      return this.http.post(this.API_URI + '/signup', credencials,this.httpOptions);
  }
}
