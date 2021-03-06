import { Component, Input, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MachineModel } from 'src/app/model/machine.model';
import { poste_de_travail_Model } from 'src/app/model/poste-de-travail.model';
import { MachineService } from 'src/app/service/machine.service';
import { PosteDeTravailsService } from 'src/app/service/poste-de-travails.service';
import { UserService } from 'src/app/service/user.service';
import { MachineComponent } from '../machine/machine.component';

@Component({
  selector: 'app-atelier',
  templateUrl: './atelier.component.html',
  styleUrls: ['./atelier.component.css']
})
export class AtelierComponent implements OnInit {

  grp: string="atelier";

  visible_pdt: boolean = false;

  poste_de_travail: poste_de_travail_Model = new poste_de_travail_Model();

  constructor(public readonly user_service: UserService,
              public readonly machine_service: MachineService,
              public readonly poste_de_travail_service: PosteDeTravailsService) { }

  ngOnInit(): void {
    this.user_service.getcurentUser();
    this.user_service.getUsers();
    this.machine_service.readMachines();
    this.poste_de_travail_service.read_poste_de_travails();
  }

  open_add_poste_de_travail(): void {
    this.visible_pdt = true;
  }

  add_poste_de_travail(): void {
    if(this.poste_de_travail.name == '') {
      this.visible_pdt = false; //to remove
      //display error
      return;
    }
    this.machine_service.machines.forEach(machine => {
      if(machine.checked) {
        this.poste_de_travail.machines.push((machine));
        machine.checked = false;
      }
    });
    this.user_service.users.forEach(usr=>{
      if(usr.checked) {
        this.poste_de_travail.users.push(usr);
        usr.checked = false;
      }
    });
    this.poste_de_travail_service.creat_poste_de_travail(this.poste_de_travail);
    this.visible_pdt = false; 
  }

  quit () :void {
    this.visible_pdt = false;
    this.user_service.users.forEach(usr=>{
      usr.checked = false;
    });
    this.machine_service.machines.forEach(machine=>{
      machine.checked = false;
    });
    this.poste_de_travail.name = "";
  }
}
