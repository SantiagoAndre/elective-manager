import { Injectable } from '@angular/core';

import { User } from '../interface/user'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor() { }
  signInService(credencials: User) {
    console.log(credencials);
    console.log("hola");
    return credencials;
  }
}
