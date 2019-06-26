import { Injectable } from '@angular/core';
import { User } from '../interface/user'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(credencials: User) {
    console.log(credencials);
    console.log("in login service");
    return credencials;
  }
}
