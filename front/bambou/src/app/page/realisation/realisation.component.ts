import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-realisation',
  templateUrl: './realisation.component.html',
  styleUrls: ['./realisation.component.css']
})
export class RealisationComponent implements OnInit {

  grp: string="atelier";

  constructor(public user_service: UserService) { }

  ngOnInit(): void {
    this.user_service.getcurentUser();
  }

}
