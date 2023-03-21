import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interface/cliente';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.loginService.getToken()}`
  });
  private apiUrl = 'http://192.168.116.159:3333/api/v2/cliente';

  constructor(private http: HttpClient, private loginService: LoginService) { }

  read(): Observable<any> {
    return this.http.get<Cliente[]>(this.apiUrl,{headers:this.headers});
  }

  getById(id: number): Observable<Cliente> {
    const url = `${this.apiUrl}/UP/${id}`;
    return this.http.get<Cliente>(url, {headers:this.headers});
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrl}`, cliente, {headers:this.headers});
  }

  update(id: number, cliente: Cliente): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, cliente, {headers:this.headers});
  }

  delete(id: number): Observable<Cliente> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Cliente>(url, {headers:this.headers});
  }
}
