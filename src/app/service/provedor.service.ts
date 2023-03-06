import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provedor } from '../interface/provedor';
import { LoginService } from '../login.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProvedorService {

  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.registerService.getToken()}`
  });
  private apiUrl = 'http://127.0.0.1:8000/api/v2/provedor';

  constructor(private http: HttpClient, private registerService: LoginService) { }

  read(): Observable<any> {
    return this.http.get<Provedor[]>(this.apiUrl,{headers:this.headers});
  }


  getById(id: number): Observable<Provedor> {
    const url = `${this.apiUrl}/UP/${id}`;
    return this.http.get<Provedor>(url, {headers:this.headers});
  }

  create(provedor: Provedor): Observable<Provedor> {
    return this.http.post<Provedor>(`${this.apiUrl}`, provedor, {headers:this.headers});
  }

  update(id: number, provedor: Provedor): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, provedor, {headers:this.headers});
  }

  delete(id: number): Observable<Provedor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Provedor>(url, {headers:this.headers});
  }

}
