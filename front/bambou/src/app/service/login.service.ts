import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../model/user.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const key = 'auth_jwt'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  jwt = '';
  user: UserModel | undefined;

  constructor(private readonly http: HttpClient, private readonly router: Router) {
    const retrieveJwtToken = this.getJwtTokenFromCache();
    this.jwt = retrieveJwtToken !== null ? retrieveJwtToken : '';
  }
//login
  login(email :string, password :string) {
    let API_URL = `${environment.baseUrl}/auth/local`;
    let data = {identifier:email, password:password};
    console.log('data:', data);
    this.http.post(API_URL, data).subscribe((res: any)=>{
      console.log("yo:",res)
      this.jwt = res.jwt;
      this.cacheJwtToken();
      this.user = res.user;
      //nav to user main page
      switch (this.user?.role.type) {
        case "admin":
          console.log("nav to admin");
          this.router.navigate(['/admin'])
          break;
      
        default:
          break;
      }
    });
  }

//jwt

  cacheJwtToken(): void {
    localStorage.setItem(key, this.jwt);
  }

  getJwtTokenFromCache(): string | null {
    return localStorage.getItem(key);
  }

  verifyConnexion(): void {
    this.http.get<UserModel>(`${environment.baseUrl}/users/me`).subscribe(
      (data) => {
        this.user = data;
      },
      (e) => {
        this.user = undefined;
        this.jwt = '';
        this.router.navigate(['/login']); // to test out
      }
    );
  }

}
