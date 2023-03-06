import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Editorial } from './editorial';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.loginService.getToken()}`
  });
  private apiUrl = 'http://127.0.0.1:8000/api/v2/editoriales';

  constructor(private http: HttpClient, private loginService: LoginService) { }

  read(): Observable<Editorial[]> {
    return this.http.get<Editorial[]>(this.apiUrl,{headers:this.headers});
  }

  getById(id: number): Observable<Editorial> {
    const url = `${this.apiUrl}/UP/${id}`;
    return this.http.get<Editorial>(url,{headers:this.headers});
  }

  create(alumno: Editorial): Observable<Editorial> {
    return this.http.post<Editorial>(`${this.apiUrl}`, alumno,{headers:this.headers});
  }

  update(id: number, alumno: Editorial): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, alumno,{headers:this.headers});
  }

  delete(id: number): Observable<Editorial> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Editorial>(url,{headers:this.headers});
  }

  
}
