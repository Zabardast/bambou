import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  userItem: UserModel = new UserModel();

  constructor() { }

  ngOnInit(): void {
    console.log("userItem", this.userItem);
  }

  Items(): UserModel {
    return (this.userItem == null) ? new UserModel() : this.userItem;
  }

  details(id: number): void {

  }
}
