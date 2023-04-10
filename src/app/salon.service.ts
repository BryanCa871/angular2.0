import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salon } from './salon';
import { LoginService } from './login.service';
import { User } from './user';
import { Enviromet } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SalonService {
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.loginService.getToken()}`
  });
  private apiUrl = `http://${Enviromet.url}/api/v2/salones`;

  constructor(private http: HttpClient, private loginService: LoginService) { }

  read(): Observable<Salon[]> {
    return this.http.get<Salon[]>(this.apiUrl,{headers:this.headers});
  }

  getById(_id: number): Observable<Salon> {
    const url = `${this.apiUrl}/UP/${_id}`;
    return this.http.get<Salon>(url,{headers:this.headers});
  }

  create(salon: Salon): Observable<Salon> {
    return this.http.post<Salon>(`${this.apiUrl}`, salon,{headers:this.headers});
  }

  update(_id: number, salon: Salon): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${_id}`, salon,{headers:this.headers});
  }

  delete(_id: number): Observable<Salon> {
    const url = `${this.apiUrl}/${_id}`;
    return this.http.delete<Salon>(url,{headers:this.headers});
  }

  obtenerDatos(id: number): Observable<Salon> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Salon>(url,{headers:this.headers});
  }

  obtenerUser(): Observable<User> {
    return this.http.get<User>('http://127.0.0.1:3333/api/user',{headers:this.headers});
  }

  
}
