import { Component, OnInit } from '@angular/core';
import { GammeService } from 'src/app/service/gamme.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-gamme',
  templateUrl: './gamme.component.html',
  styleUrls: ['./gamme.component.css']
})
export class GammeComponent implements OnInit {

  grp: string="atelier";

  disp_add_modal: boolean = false;

  constructor(public user_service: UserService, public gamme_service: GammeService) { }

  ngOnInit(): void {
    this.user_service.getcurentUser();
    this.gamme_service.readGammes();
  }

  ajouterGamme(): void {
    this.disp_add_modal = this.disp_add_modal ? false : true; 
  }

}
