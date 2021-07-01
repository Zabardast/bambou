import { Component, OnInit } from '@angular/core';
import { MachineModel } from 'src/app/model/machine.model';
import { MachineService } from 'src/app/service/machine.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit {

  grp: string="atelier";
  visible_machine: boolean = false;

  machine: MachineModel = new MachineModel();

  constructor(public readonly user_service: UserService,
              public readonly machine_service: MachineService) { }

  ngOnInit(): void {
    this.user_service.getUsers();
    this.machine_service.readMachines();
  }

  open_add_machine(): void {
    this.visible_machine = true;
  }

  add_machine(): void {
    if(this.machine.nom == '') {
      this.visible_machine = false; //to remove
      //display error
      return;
    }
    this.machine_service.creatMachine(this.machine);
    this.visible_machine = false;
  }

}
