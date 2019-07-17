import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Elective } from './elective.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElectiveService {

  constructor(private http: HttpClient) { }
  addElective(elective:Elective){

    return this.http.post(environment.apiURL+'/create_elective', elective).toPromise();
  }
  updateElective(elective:Elective){

    return this.http.post(environment.apiURL, elective).toPromise();
  }
  getElectiveList() {

    return this.http.get(environment.apiURL + '/list_electives').toPromise();
  }
  deleteElective(id:number) {
    
    return this.http.get(environment.apiURL+ `/delete_elective/?_id=${id}`).toPromise();
  }

}
