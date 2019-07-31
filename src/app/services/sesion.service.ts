import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx"
import {  HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {User} from '../interface/user' 
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";

@Injectable({
  providedIn: 'root'
})

export class SesionService {
  //API_URI = 'https://electivas-api.herokuapp.com/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  login(credencials: Observable<User[]>) {
    /*console.log("url: "+ this.API_URI + 'signin');
    console.log(credencials);*/
    return this.http.post(environment.apiURL + 'signin', credencials,this.httpOptions)
    .pipe(map(data => data));
  }

  setUser(user): void{
    console.log(user._id);
    let user_string = JSON.stringify(user._id);
    this.setToken(user._id);
    console.log(user_string);
    localStorage.setItem('currentUser',user_string);
  }

  setToken(token):void{
    localStorage.setItem('accessToken', token);
  }

  getToken(){
    return localStorage.getItem('accessToken');
  }

  getCurrentUser(){
    let user_string = localStorage.getItem('currentUser');
    if(!isNullOrUndefined(user_string)){
      let user = JSON.parse(user_string);
      return user;
    }
    else{
      return null;
    }
  }

  /*
  getToken(email:  Observable<String[]>){
    console.log("url: "+ this.API_URI + 'getToken');
    console.log(email);
    //TODO
  }
  */
}