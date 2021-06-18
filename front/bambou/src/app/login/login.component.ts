import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email: string = '';
  password: string = '';

  constructor(private loginService :LoginService) {}
  
  submitForm()
  {
    console.log("email: ", this.email)
    console.log("password: ", this.password)
    //get the token
    this.loginService.login(this.email, this.password);
  }


  ngOnInit(): void {

  }

}
