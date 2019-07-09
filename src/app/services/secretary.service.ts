import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx"
import { Electiva } from '../interface/electiva'
import {  HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class SesionService {
  API_URI = 'http://localhost:8080/secretaria/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  getElectivas(){
    return this.http.get(this.API_URI + 'getElectivas');
  }
  actualizarElectivas(electivas: Observable<Electiva[]>){
    return this.http.post(this.API_URI + 'updateElectivas', electivas,this.httpOptions);
  }
}
