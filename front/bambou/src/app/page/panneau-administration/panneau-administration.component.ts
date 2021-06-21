import { Component, Directive, Input, OnInit } from '@angular/core';
import { HeaderTemplateComponent } from 'src/app/component/header-template/header-template.component';
import { UserModel, RoleModel } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-panneau-administration',
  templateUrl: './panneau-administration.component.html',
  styleUrls: ['./panneau-administration.component.css']
})
export class PanneauAdministrationComponent implements OnInit {
  
  grp: string="admin";
  user: UserModel = new UserModel();
  visible: boolean = false;

  constructor(public readonly user_service: UserService) { 
    //to remove
    // this.user.img = "https://lh3.googleusercontent.com/a-/AOh14GjuO9PpmvuQTz-8Hm2azV3fSQbbZrflj9qXbH4p3VU=s96-c"
    // this.user.role = new RoleModel();
    // this.user.role.id = 3;
    // this.user.username = "hugo";
    // this.user.email = "hugo.molle@yahoo.fr";
  }

  ngOnInit(): void {
    this.user_service.getUsers();
    this.user_service.getcurentUser();
  }

  openaddUser(): void {
    this.visible = true;
  }

  addUser():void {
    if (this.user.username == '' || this.user.email == '' || this.user.password == '') {
      this.visible = false; //to remove
      //display error
      return;
    }
    this.user_service.createUser(this.user)
    //add popup if user added
    this.visible = false;
  }

}
