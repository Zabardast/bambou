import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-gamme',
  templateUrl: './gamme.component.html',
  styleUrls: ['./gamme.component.css']
})
export class GammeComponent implements OnInit {

  grp: string="atelier";

  constructor(public user_service: UserService) { }

  ngOnInit(): void {
    this.user_service.getcurentUser();
  }

}
