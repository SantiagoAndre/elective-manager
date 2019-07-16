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
    alert("addElectiveService");
    return this.http.post(environment.apiURL + '/Elective', elective).toPromise();
  }
  updateElective(elective:Elective){
    alert("updatelectiveService");
    return this.http.post(environment.apiURL + '/Elective', elective).toPromise();
  }
  getElectiveList() {
    alert("getElectiveListService");
    return this.http.get(environment.apiURL + '/Elective').toPromise();
  }
  deleteElective(id:number) {
    alert("deleteElectiveService");
    return this.http.delete(environment.apiURL + '/Elective/'+id).toPromise();
  }

}
