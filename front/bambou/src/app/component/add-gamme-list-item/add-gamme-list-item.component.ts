import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GammeModel } from 'src/app/model/gamme.model';
import { OperationModel } from 'src/app/model/operation.model';
import { GammeService } from 'src/app/service/gamme.service';
import { MachineService } from 'src/app/service/machine.service';
import { OperationsService } from 'src/app/service/operations.service';
import { PosteDeTravailsService } from 'src/app/service/poste-de-travails.service';

@Component({
  selector: 'app-add-gamme-list-item',
  templateUrl: './add-gamme-list-item.component.html',
  styleUrls: ['./add-gamme-list-item.component.css']
})
export class AddGammeListItemComponent implements OnInit {

  name: string = "";
  gamme: GammeModel = new GammeModel();

  op_name: string = "";
  op_time = new Date();

  @Input()
  disp_add_modal: boolean = false;

  @Output()
  disp_add_modalChange = new EventEmitter<boolean>()

  constructor(public readonly service_operation: OperationsService,
              public readonly service_machine: MachineService,
              public readonly service_pdt: PosteDeTravailsService,
              public readonly service_gamme: GammeService) { }

  ngOnInit(): void {
    this.service_operation.readOperations();
    this.service_machine.readMachines();
    this.service_pdt.read_poste_de_travails();
  }

  add_op(): void {
    let operation: OperationModel = new OperationModel();
    operation.name = this.op_name;
    operation.prod_time = this.op_time;
    //add protection to avoid multi machine or pdt selection

    //add machine
    this.service_machine.machines.forEach(machine=>{
      if(machine.checked) {
        operation.machine = machine;
        machine.checked = false;
      }
    })
    //add post de travail
    this.service_pdt.poste_de_travails.forEach(pdt=>{
      if(pdt.checked) {
        operation.poste_de_travail = pdt;
        pdt.checked = false;
      }
    })

    this.service_operation.creatOperation(operation)
    this.service_operation.readOperations();
  }

  save(): void {
    this.gamme.name = this.name;
    this.service_operation.operations.forEach(op => {
      if (op.checked) {
        this.gamme.operations.push(op);
      }
    });
    this.service_gamme.creatGamme(this.gamme);
    this.quit();
  }

  quit(): void {
    this.disp_add_modalChange.emit(false);
  }

}
