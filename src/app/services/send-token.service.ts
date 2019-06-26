import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendTokenService {

  constructor() { }
  send(email : String) {
    console.log("in token-service, send token to "+email);
    return "Success";
  }
}
