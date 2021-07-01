import { Time } from "@angular/common";
import { OperationsService } from "../service/operations.service";
import { MachineModel } from "./machine.model";
import { poste_de_travail_details_Model, poste_de_travail_Model } from "./poste-de-travail.model";

export class OperationModel {
    id = 0;
    name = '';
    time: Date = new Date(); //HH::mm::ss
    production_time: number = 0;
    machine: MachineModel = new MachineModel();
    // poste_de_travail: poste_de_travail_Model = new poste_de_travail_Model();
    poste_de_travail: poste_de_travail_Model = new poste_de_travail_Model();
    checked = false;
}

export class Operation_detail_Model {
    id = 0;
    name = '';
    time: Date = new Date(); //HH::mm::ss
    production_time: number = 0;
    machine: number = 0;
    // poste_de_travail: poste_de_travail_Model = new poste_de_travail_Model();
    poste_de_travail: number =0;
    checked = false;
}

export function OM_to_ODM(om: OperationModel) :Operation_detail_Model {
    let odm: Operation_detail_Model = new Operation_detail_Model();
    
    odm.id = om.id;
    odm.machine = om.machine.id;
    odm.poste_de_travail = om.poste_de_travail.id;
    odm.production_time = om.production_time;
    odm.name = om.name;

    return odm;
}

export function ODM_to_OM(om: Operation_detail_Model, operation_service: OperationsService) :OperationModel {
    let odm: OperationModel = new OperationModel();
    
    odm.id = om.id;
    odm.machine = operation_service.operations[operation_service.operations.findIndex((op)=>{return op.id === odm.id})].machine;
    odm.poste_de_travail = operation_service.operations[operation_service.operations.findIndex((op)=>{return op.id === odm.id})].poste_de_travail;
    odm.production_time = om.production_time;
    odm.name = om.name;

    return odm;
}
