import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { poste_de_travail_details_Model, poste_de_travail_Model } from '../model/poste-de-travail.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PosteDeTravailsService {

  poste_de_travails: poste_de_travail_Model[] = [];
  poste_de_travail: poste_de_travail_Model = new poste_de_travail_Model();

  constructor(public readonly http :HttpClient) { }

  creat_poste_de_travail(poste_de_travail: poste_de_travail_Model) {
    this.http.post(`${environment.baseUrl}/poste-de-travails`, poste_de_travail).subscribe((res)=>{
      this.read_poste_de_travails();
    });
  }

  read_poste_de_travail(id: number) {
    this.http.get<poste_de_travail_Model>(`${environment.baseUrl}/poste-de-travails/${id}`).subscribe((res)=>{
      this.poste_de_travail = res;
    })
  }

  read_poste_de_travails() {
    this.http.get<poste_de_travail_Model[]>(`${environment.baseUrl}/poste-de-travails`).subscribe((res)=>{
      this.poste_de_travails = res;
    });
  }

  update_poste_de_travails(poste_de_travail: poste_de_travail_Model) {
    this.http.put(`${environment.baseUrl}/poste-de-travails/${poste_de_travail.id}`, poste_de_travail).subscribe(()=>{
      this.read_poste_de_travails();
    });
  }

  delete_poste_de_travails(id: number) {
    this.http.delete(`${environment.baseUrl}/poste-de-travails/${id}`).subscribe(()=>{
      this.read_poste_de_travails();
    });
  }
}
