import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user.model';

export type menuItem = {
  label: string;
  path: string
}

@Component({
  selector: 'app-header-template',
  templateUrl: './header-template.component.html',
  styleUrls: ['./header-template.component.css']
})
export class HeaderTemplateComponent implements OnInit {

  //page title
  page_title: string='';

  /* Clem */
  menuAdmin: menuItem[] = []
  menuWorkshop: menuItem[] = [{path: '/realisation', label: 'Realisation'},
                              {path: '/poste-de-travail', label: 'Poste-de-travail'},
                              {path: '/machine', label: 'Machine'},
                              {path: '/gamme', label: 'Gamme'}]
  menuCommerce: menuItem[] = [{path: '/dashboard', label: 'dashboard'}, {path: '/pwet', label: 'pwet'}]

  @Input()
  pg_grp: String = '';

  @Input()
  user: UserModel = new UserModel();

  constructor(public readonly router: Router) {}

  ngOnInit(): void {
    console.log('page_group: ', this.pg_grp); //debug
    console.log('user_model', this.user);
  }

  determineMenu(): menuItem[] {
    if (this.user?.role?.id == 3) { //admin
      return this.menuAdmin;
    }else if(this.user?.role?.id == 4) {  //atelier
      return this.menuWorkshop;
    }else if(this.user?.role?.id == 5) {  //commerciaux
      return this.menuCommerce;
    }
    return this.menuWorkshop;
  }

}
