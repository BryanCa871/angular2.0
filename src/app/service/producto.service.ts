import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interface/producto';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.registerService.getToken()}`
  });
  private apiUrl = 'http://192.168.116.159:3333/api/v2/producto';

  constructor(private http: HttpClient, private registerService: LoginService) { }

  read(): Observable<any> {
    return this.http.get<Producto[]>(this.apiUrl,{headers:this.headers});
  }

  getById(id: number): Observable<Producto> {
    const url = `${this.apiUrl}/UP/${id}`;
    return this.http.get<Producto>(url, {headers:this.headers});
  }

  create(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.apiUrl}`, producto, {headers:this.headers});
  }

  update(id: number, producto: Producto): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, producto, {headers:this.headers});
  }

  delete(id: number): Observable<Producto> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Producto>(url, {headers:this.headers});
  }
}
