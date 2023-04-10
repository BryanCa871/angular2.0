import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
export interface Tiles{
  used: boolean
  value: number
  status: string
}

@Injectable({
  providedIn: 'root'
})

export class BoardService {
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.registerService.getToken()}`
  });
  private apiUrl = 'http://184.72.79.221:3333/api/v2/empleado';

  constructor(private http: HttpClient, private registerService: LoginService) { }

  read(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl,{headers:this.headers});
  }

  getById(id: number): Observable<any> {
    const url = `${this.apiUrl}/UP/${id}`;
    return this.http.get<any>(url, {headers:this.headers});
  }

  create(empleado: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, empleado, {headers:this.headers});
  }

  update(id: number, empleado: any): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, empleado, {headers:this.headers});
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url, {headers:this.headers});
  }
}
