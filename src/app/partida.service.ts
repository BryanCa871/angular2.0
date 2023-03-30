import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Partida } from './partida';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.registerService.getToken()}`
  });
  private apiUrl = 'http://127.0.0.1:3333/partida';

  constructor(private http: HttpClient, private registerService: LoginService) { }

  read(): Observable<any> {
    return this.http.get<Partida[]>(this.apiUrl,{headers:this.headers});
  }

  getById(id: number): Observable<Partida> {
    const url = `${this.apiUrl}/UP/${id}`;
    return this.http.get<Partida>(url, {headers:this.headers});
  }

  create(partida: Partida): Observable<Partida> {
    return this.http.post<Partida>(`${this.apiUrl}`, partida, {headers:this.headers});
  }

  update(id: number, partida: Partida): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, partida, {headers:this.headers});
  }

  delete(id: number): Observable<Partida> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Partida>(url, {headers:this.headers});
  }

  
}