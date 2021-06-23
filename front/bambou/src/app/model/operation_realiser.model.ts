import { MachineModel } from "./machine.model";
import { poste_de_travail_Model } from "./poste-de-travail.model";

export class OperationRealiserModel {
    id = 0;
    fini: boolean = false;
    time = "00:00:00";
    machine :MachineModel = new MachineModel();
    poste_de_travail :poste_de_travail_Model = new poste_de_travail_Model();
}