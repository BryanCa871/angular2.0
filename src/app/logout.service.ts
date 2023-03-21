import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { User } from './user';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.login.getToken()}`
  });
  private apiUrl = 'http://192.168.116.159:3333/api/logout';

  constructor(private http: HttpClient, private cookies: CookieService, private login: LoginService) { }

  deleteTokenDB(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.login.getToken()}`
    });
    return this.http.delete<User>(this.apiUrl, { headers });
  }

  deleteToken(){
    //localStorage.removeItem("Role")
    //localStorage.removeItem("Estado")
    this.cookies.delete("token");
  }

}
