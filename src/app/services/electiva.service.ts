import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Electiva } from '../models/electiva';

@Injectable({
  providedIn: 'root'
})
export class ElectivaService {

  selectedElectiva: Electiva;
  electivas: Electiva[];

  readonly URL_API = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.selectedElectiva = new Electiva();
  }

  postElectiva(electiva: Electiva) {
    return this.http.post(this.URL_API, electiva);
  }

  getElectivas() {
    return this.http.get(this.URL_API+'/list_electives');
  }

  putElectiva(electiva: Electiva) {
    return this.http.put(this.URL_API + `/${electiva._id}`, electiva);
  }

  deleteElectiva(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
