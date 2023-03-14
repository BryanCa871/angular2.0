import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compra } from '../interface/compra';
import { LoginService } from '../login.service';
@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.registerService.getToken()}`
  });
  private apiUrl = 'http://127.0.0.1:3333/api/v2/compra';

  constructor(private http: HttpClient, private registerService: LoginService) { }

  read(): Observable<any> {
    return this.http.get<Compra[]>(this.apiUrl,{headers:this.headers});
  }

  getById(id: number): Observable<Compra> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Compra>(url, {headers:this.headers});
  }

  create(compra: Compra): Observable<Compra> {
    return this.http.post<Compra>(`${this.apiUrl}`, compra, {headers:this.headers});
  }

  update(id: number, compra: Compra): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, compra, {headers:this.headers});
  }

  delete(id: number): Observable<Compra> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Compra>(url, {headers:this.headers});
  }

}
