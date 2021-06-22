import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MachineModel } from '../model/machine.model';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  machines: MachineModel[] = [];
  machine: MachineModel = new MachineModel();

  constructor(private readonly http: HttpClient) { }

  creatMachine(machine: MachineModel) {
    this.http.post(`${environment.baseUrl}/machines`, machine).subscribe((res)=>{
      this.readMachines();
    });
  }

  readMachine(id: number) {
    this.http.get<MachineModel>(`${environment.baseUrl}/machines/${id}`).subscribe((res)=>{
      this.machine = res;
    })
  }

  readMachines() {
    this.http.get<MachineModel[]>(`${environment.baseUrl}/machines`).subscribe((res)=>{
      this.machines = res;
    });
  }

  updateMachines(machine: MachineModel) {
    this.http.put(`${environment.baseUrl}/machines/${machine.id}`, machine).subscribe(()=>{
      this.readMachines();
    });
  }

  deleteMachines(id: number) {
    this.http.delete(`${environment.baseUrl}/machines/${id}`).subscribe(()=>{
      this.readMachines();
    });
  }


}
