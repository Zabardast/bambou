import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  userItem: UserModel = new UserModel();

  password: string ="";

  visible: boolean = false;

  constructor(public readonly user_service: UserService) { }

  ngOnInit(): void {
    console.log("userItem", this.userItem);
  }

  Items(): UserModel {
    return (this.userItem == null) ? new UserModel() : this.userItem;
  }

  details(id: number): void {

  }

  updateUser(user :UserModel) : void {
    //add the editing form before this
    this.visible = false;
    this.user_service.updateUser(user);
  }

  deleteUser(id: number) :void {
    console.log("delete");
    this.user_service.deleteUser(id);
  }

  // closePopup(): void {
  //   this.visible = false
  // }

  //to remove
  change(value: boolean): void {
    console.log(value);
  }
}
