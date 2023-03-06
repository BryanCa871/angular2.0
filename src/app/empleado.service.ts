import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.registerService.getToken()}`
  });
  private apiUrl = 'http://127.0.0.1:8000/api/v2/empleado';

  constructor(private http: HttpClient, private registerService: LoginService) { }

  read(): Observable<any> {
    return this.http.get<Empleado[]>(this.apiUrl,{headers:this.headers});
  }

  getById(id: number): Observable<Empleado> {
    const url = `${this.apiUrl}/UP/${id}`;
    return this.http.get<Empleado>(url, {headers:this.headers});
  }

  create(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(`${this.apiUrl}`, empleado, {headers:this.headers});
  }

  update(id: number, empleado: Empleado): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, empleado, {headers:this.headers});
  }

  delete(id: number): Observable<Empleado> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Empleado>(url, {headers:this.headers});
  }

  
}