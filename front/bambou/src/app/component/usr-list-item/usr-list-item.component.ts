import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user.model';

@Component({
  selector: 'app-usr-list-item',
  templateUrl: './usr-list-item.component.html',
  styleUrls: ['./usr-list-item.component.css']
})
export class UsrListItemComponent implements OnInit {

  @Input()
  user: UserModel = new UserModel();

  constructor() { }

  ngOnInit(): void {
  }

}
