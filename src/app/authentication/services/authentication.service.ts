import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {User} from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080/';

  getUser(username, password){
    return this.http.post<any>('http://localhost:8080/authenticate', { username, password})
      .pipe(
        map(
          userData => {
            localStorage.setItem('username', username);
            localStorage.setItem('token', userData.token);
            return userData;
          }
        )
      );
  }

}
