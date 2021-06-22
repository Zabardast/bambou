import { Component, Input, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MachineModel } from 'src/app/model/machine.model';
import { poste_de_travail_Model } from 'src/app/model/poste-de-travail.model';
import { MachineService } from 'src/app/service/machine.service';
import { PosteDeTravailsService } from 'src/app/service/poste-de-travails.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.component.html',
  styleUrls: ['./atelier.component.css']
})
export class AtelierComponent implements OnInit {

  grp: string="atelier";

  visible_pdt: boolean = false;
  visible_machine: boolean = false;

  poste_de_travail: poste_de_travail_Model = new poste_de_travail_Model();
  machine: MachineModel = new MachineModel();

  constructor(public readonly user_service: UserService,
              public readonly machine_service: MachineService,
              public readonly poste_de_travail_service: PosteDeTravailsService) { }

  ngOnInit(): void {
    this.user_service.getcurentUser();
    this.machine_service.readMachines();
    this.poste_de_travail_service.read_poste_de_travails();
  }

  open_add_poste_de_travail(): void {
    if(this.visible_machine == true) this.visible_machine = false;
    this.visible_pdt = true;
  }

  add_poste_de_travail(): void {
    if(this.poste_de_travail.name == '') {
      this.visible_pdt = false; //to remove
      //display error
      return;
    }
    this.poste_de_travail_service.creat_poste_de_travail(this.poste_de_travail);
    this.visible_pdt = false; 
  }

  open_add_machine(): void {
    if(this.visible_pdt == true) this.visible_pdt = false;
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
