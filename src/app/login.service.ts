import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { User } from './user';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.getToken()}`
  });
  private apiUrl = 'http://127.0.0.1:3333/api';
  public rol_id!: number;
  public isAdmin: boolean = false;
  
  constructor(private http: HttpClient, private cookies: CookieService) { }

  read(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/login`);
  }

  getById(id: number): Observable<User> {
    const url = `${this.apiUrl}/UP/${id}`;
    return this.http.get<User>(url);
  }

  create(user: User): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    });
    const options = { headers };
    return this.http.post<User>(`${this.apiUrl}/login`, user, options);
  }

  update(id: number, user: User): Observable<Object> {
    return this.http.put(`${this.apiUrl}/login/${id}`, user);
  }

  delete(id: number): Observable<User> {
    const url = `${this.apiUrl}/login/${id}`;
    return this.http.delete<User>(url);
  }

  user(): Observable<User> {
    const url = `${this.apiUrl}/user`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`
    });
    return this.http.get<User>(url, {headers});
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
   getToken() {
    //console.log(this.cookies.get("token"))
    return this.cookies.get("token");
  }

  getRole() {
    return localStorage.getItem('Role');
  }

  getEstado() {
    return localStorage.getItem('Estado');
  }


  user2(): Observable<User> {
    const url = `${this.apiUrl}/user`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`
    });
    return this.http.get<User>(url, {headers})
      .pipe(
        tap((user: User) => {
          this.rol_id = user.rol_id;
        })
      );
  }

  


}
