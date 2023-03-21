import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from './libro';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.loginService.getToken()}`
  });
  private apiUrl = 'http://192.168.116.159:3333/api/v2/libros';

  constructor(private http: HttpClient, private loginService: LoginService) { }

  read(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiUrl,{headers:this.headers});
  }

  getById(id: number): Observable<Libro> {
    const url = `${this.apiUrl}/UP/${id}`;
    return this.http.get<Libro>(url,{headers:this.headers});
  }

  create(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(`${this.apiUrl}`, libro,{headers:this.headers});
  }

  update(id: number, libro: Libro): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, libro,{headers:this.headers});
  }

  delete(id: number): Observable<Libro> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Libro>(url,{headers:this.headers});
  }

  
}
