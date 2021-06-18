import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  userItem?: UserModel;

  constructor() { }

  ngOnInit(): void {
  }

}
