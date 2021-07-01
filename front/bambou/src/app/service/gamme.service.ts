import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GammeModel } from '../model/gamme.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GammeService {

  gammes: GammeModel[] = [];
  gamme: GammeModel = new GammeModel();

  constructor(private readonly http: HttpClient) { }

  creatGamme(gamme: GammeModel) {
    this.http.post(`${environment.baseUrl}/gammes`, gamme).subscribe(()=>{
      this.readGammes();
    });
  }

  readGamme(id: number) {
    this.http.get<GammeModel>(`${environment.baseUrl}/gammes/${id}`).subscribe((res)=>{
      this.gamme = res;
    })
  }

  readGammes() {
    this.http.get<GammeModel[]>(`${environment.baseUrl}/gammes`).subscribe((res)=>{
      this.gammes = res;
      console.log("readgammes: ", res)
    });
  }

  updateGamme(gamme: GammeModel) {
    this.http.put(`${environment.baseUrl}/gammes/${gamme.id}`, gamme).subscribe(()=>{
      this.readGammes();
    });
  }

  deleteGamme(id: number) {
    this.http.delete(`${environment.baseUrl}/gammes/${id}`).subscribe(()=>{
      this.readGammes();
    });
  }
}
