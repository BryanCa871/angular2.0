import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { LoginService } from './login.service';
import { Enviromet } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.loginService.getToken()}`,
  });
  private apiUrl = `http://${Enviromet.url}/api/v2/usuario`;

  constructor(private http: HttpClient, private loginService: LoginService) { }

  read(): Observable<any> {
    return this.http.get<Usuario[]>(this.apiUrl,{headers:this.headers});
  }

  getById(id: number): Observable<Usuario> {
    const url = `${this.apiUrl}/UP/${id}`;
    return this.http.get<Usuario>(url, {headers:this.headers});
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}`, usuario, {headers:this.headers});
  }

  update(id: number, usuario: Usuario): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, usuario, {headers:this.headers});
  }

  delete(id: number): Observable<Usuario> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Usuario>(url, {headers:this.headers});
  }
}
