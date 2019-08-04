import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import {  HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SecretaryService {
  //API_URI = 'https://electivas-api.herokuapp.com/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  cerrarSesion(){
    let accessToken = localStorage.getItem('accessToken');
    //const url_api =
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
    return this.http.get(environment.apiURL + 'logout');
  }

  abrirPeriodo(){
    return this.http.post(environment.apiURL + 'open_period', null);
  }

  cerrarPeriodo(){
    return this.http.post(environment.apiURL + 'close_period', null);
  }

  enviarCorreos(){
    this.http.get(environment.apiURL + 'enviocorreos');
  }

  uploadFile(data){
    return this.http.post(environment.apiURL + "update_excel_file" , data);
  }

}
