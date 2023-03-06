import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Pais } from './pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.loginService.getToken()}`
  });
  private apiUrl = 'http://127.0.0.1:8000/api/v2/pais';

  constructor(private http: HttpClient, private loginService: LoginService) { }

  read(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.apiUrl,{headers:this.headers});
  }

  getById(id: number): Observable<Pais> {
    const url = `${this.apiUrl}/UP/${id}`;
    return this.http.get<Pais>(url, {headers:this.headers});
  }

  create(pais: Pais): Observable<Pais> {
    return this.http.post<Pais>(`${this.apiUrl}`, pais, {headers:this.headers});
  }

  update(id: number, pais: Pais): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, pais, {headers:this.headers});
  }

  delete(id: number): Observable<Pais> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Pais>(url, {headers:this.headers});
  }

  
}
