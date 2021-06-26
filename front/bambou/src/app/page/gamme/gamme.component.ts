import { Component, OnInit } from '@angular/core';
import { GammeModel } from 'src/app/model/gamme.model';
import { OperationModel } from 'src/app/model/operation.model';
import { GammeService } from 'src/app/service/gamme.service';
import { MachineService } from 'src/app/service/machine.service';
import { PosteDeTravailsService } from 'src/app/service/poste-de-travails.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-gamme',
  templateUrl: './gamme.component.html',
  styleUrls: ['./gamme.component.css']
})
export class GammeComponent implements OnInit {

  grp: string="atelier";

  disp_add_modal: boolean = true;

  gamme: GammeModel = new GammeModel();

  operation: OperationModel = new OperationModel();

  constructor(public readonly user_service: UserService,
              public readonly gamme_service: GammeService,
              public readonly pdt_service: PosteDeTravailsService,
              public readonly machine_service: MachineService) { }

  ngOnInit(): void {
    this.user_service.getcurentUser();
    this.user_service.getUsers();
    this.gamme_service.readGammes();
    this.pdt_service.read_poste_de_travails();
    this.machine_service.readMachines();
  }

  ajouterGamme(): void {
    this.disp_add_modal = this.disp_add_modal ? false : true; 
  }

}
