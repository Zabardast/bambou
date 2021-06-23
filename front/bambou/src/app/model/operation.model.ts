import { Time } from "@angular/common";
import { MachineModel } from "./machine.model";
import { poste_de_travail_Model } from "./poste-de-travail.model";

export class OperationModel {
    id = 0;
    name = '';
    prod_time = "00:00:00"; //HH::mm::ss
    machine: MachineModel = new MachineModel();
    poste_de_travail: poste_de_travail_Model = new poste_de_travail_Model();
    checked: boolean = false;
}