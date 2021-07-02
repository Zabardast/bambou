import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OperationModel, Operation_detail_Model } from '../model/operation.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  operations: OperationModel[] = [];
  operation: OperationModel = new OperationModel();

  constructor(private readonly http: HttpClient) { }

  creatOperation(operation: OperationModel):Promise<Operation_detail_Model> {
    return new Promise(async (resolve, reject)=>{
      await this.http.post(`${environment.baseUrl}/operations`, operation).toPromise()
      this.readOperations();
    })
  }

  readOperation(id: number):Promise<void> {
    return  new Promise(async (resolve, reject) => {
      this.operation =  await this.http.get<OperationModel>(`${environment.baseUrl}/operations/${id}`).toPromise()
      resolve()
    }) 
  }

  readOperations() {
    this.http.get<OperationModel[]>(`${environment.baseUrl}/operations`).subscribe((res)=>{
      this.operations = res;
    });
  }

  updateOperations(operation: OperationModel) {
    this.http.put(`${environment.baseUrl}/operations/${operation.id}`, operation).subscribe(()=>{
      this.readOperations();
    });
  }

  deleteOperations(id: number) {
    this.http.delete(`${environment.baseUrl}/operations/${id}`).subscribe(()=>{
      this.readOperations();
    });
  }

}
