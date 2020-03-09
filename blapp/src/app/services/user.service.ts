import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { TokenResponse } from '../services/authentication.service';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly URL_API = 'http://localhost:3000/api/users';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Servicio de creacion de un usuario
   * @param user JSON con datos del usuario
   */
  createUser(user: User) {
    return this.http.post<TokenResponse>(this.URL_API + '/signup', user).toPromise();
  }

  loginUser(user: User) {
    return this.http.post<TokenResponse>(this.URL_API + '/signin', user).toPromise();
  }

  putUser(user: User) {
    return this.http.put(this.URL_API, user, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).toPromise();
  }

  getUserByIdStudent(_idStudent: String) {
    return this.http.get<User>(this.URL_API + `/withIdStudent/${_idStudent}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).toPromise();
  }
}
