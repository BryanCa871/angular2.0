import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from './autor';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.loginService.getToken()}`
  });
  private apiUrl = 'http://127.0.0.1:8000/api/v2/autores';

  constructor(private http: HttpClient, private loginService: LoginService) { }

  read(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.apiUrl,{headers:this.headers});
  }

  getById(id: number): Observable<Autor> {
    const url = `${this.apiUrl}/UP/${id}`;
    return this.http.get<Autor>(url,{headers:this.headers});
  }

  create(autor: Autor): Observable<Autor> {
    return this.http.post<Autor>(`${this.apiUrl}`, autor,{headers:this.headers});
  }

  update(id: number, autor: Autor): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, autor,{headers:this.headers});
  }

  delete(id: number): Observable<Autor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Autor>(url,{headers:this.headers});
  }

  
}
