import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OperationModel } from '../model/operation.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  operations: OperationModel[] = [];
  operation: OperationModel = new OperationModel();

  constructor(private readonly http: HttpClient) { }

  creatOperation(operation: OperationModel) {
    this.http.post(`${environment.baseUrl}/operations`, operation).subscribe((res)=>{
      this.readOperations();
    });
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
