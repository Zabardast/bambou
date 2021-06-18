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

  /* Clem */
  menuAdmin: menuItem[] = []
  menuCommerce: menuItem[] = [{path: '/dashboard', label: 'dashboard'}, {path: '/pwet', label: 'pwet'}]
  menuWorkshop: menuItem[] = [{path: '/dashboard', label: 'dashboard'}, {path: '/pwet', label: 'pwet'}]

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
    if (this.user.role.id == 3) {
      return this.menuAdmin;
    }
    return this.menuWorkshop;
  }

}
