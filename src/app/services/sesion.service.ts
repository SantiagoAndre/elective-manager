import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx"
import { User } from '../interface/user'
import {  HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class SesionService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  login(credencials: Observable<User[]>) {
    console.log("url: "+ environment.apiURL + '/signin');
    console.log(credencials);
    return this.http.post(environment.apiURL + '/signin', credencials,this.httpOptions);
  }
  getToken(email:  Observable<String[]>){
    console.log("url: "+ environment.apiURL + '/getToken');
    console.log(email);
    //TODO
  }
}
