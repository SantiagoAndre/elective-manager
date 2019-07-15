import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http : HttpClient) { }

  getProfessorList(){
    return this.http.get(environment.apiURL+'/Professor').toPromise();
   }
}
