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
    return this.http.post(environment.apiURL+'create_elective', elective);
  }
  updateElective(elective:Elective){
    console.log(elective);

    return this.http.post(environment.apiURL+'update_elective', elective);
  }
  getElectiveList() {

    return this.http.get(environment.apiURL + 'list_electives');
  }
  deleteElective(id:number) {
    let elective = {"_id":id};
    elective._id = id;
      console.log("SEND: " + elective);
    return this.http.post(environment.apiURL+ `delete_elective`,elective);
  }

}
