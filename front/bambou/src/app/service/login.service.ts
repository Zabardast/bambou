import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../model/user.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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
  login(email :String, password :String): void {
    let API_URL = `${environment.baseUrl}/auth/local`;
    let data = {identifier:email, password:password};
    console.log('data:', data);
    this.http.post(API_URL, data).subscribe((res)=>{
      console.log('res: ',res);

    });
  }

//jwt

  cacheJwtToken(): void {
    localStorage.setItem(key, JSON.stringify(this.jwt));
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
