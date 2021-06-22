import { Component, Input, OnInit } from '@angular/core';
import { MachineModel } from 'src/app/model/machine.model';
import { MachineService } from 'src/app/service/machine.service';

@Component({
  selector: 'app-machine-list-item',
  templateUrl: './machine-list-item.component.html',
  styleUrls: ['./machine-list-item.component.css']
})
export class MachineListItemComponent implements OnInit {


  @Input()
  machine: MachineModel = new MachineModel();

  visible: boolean = false;

  constructor(public readonly machine_service: MachineService) { }

  ngOnInit(): void {
  }

  updateMachine(machine :MachineModel) {
    this.visible = false;
    this.machine_service.updateMachines(machine);
  }

  deleteMachine(id: number) {
    this.machine_service.deleteMachines(id);
  }

  details(id :number) :void {
    
  }

}
