import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../model/user.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: UserModel[] = [];
  user: UserModel = new UserModel();

  constructor(private readonly http: HttpClient) { }

  createUser(user: UserModel) {
    this.http.post(`${environment.baseUrl}/users`,user).subscribe((res)=>{
      this.getUsers();
    });
  }

  readUser(id: number) {
    this.http.get<UserModel>(`${environment.baseUrl}/users/${id}`).subscribe((res)=>{
      this.user = res;
    });
  }

  updateUser(user: UserModel) {
    this.http.put(`${environment.baseUrl}/users/${user.id}`,user).subscribe(() => {
      this.getUsers();
    });
  }

  getUsers() {
    this.http.get<UserModel[]>(`${environment.baseUrl}/users`).subscribe((res)=>{
      this.users = res;
    });
  }

  deleteUser(id: number) {
    this.http.delete(`${environment.baseUrl}/users/${id}`).subscribe(() => {
      this.getUsers();
    });
  }
}
