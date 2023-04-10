import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Enviromet } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = `http://${Enviromet.url}/api/user`;

  constructor(private http: HttpClient) { }

  read(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getById(id: number): Observable<User> {
    const url = `${this.apiUrl}/UP/${id}`;
    return this.http.get<User>(url);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}`, user);
  }

  update(id: number, user: User): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  delete(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<User>(url);
  }
  
}
