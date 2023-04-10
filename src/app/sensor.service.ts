import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensor } from './sensor';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.loginService.getToken()}`
  });
  private apiUrl = 'http://184.72.79.221:3333/api/v2/sensores';

  constructor(private http: HttpClient, private loginService: LoginService) { }

  read(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.apiUrl,{headers:this.headers});
  }

  getById(_id: number): Observable<Sensor> {
    const url = `${this.apiUrl}/UP/${_id}`;
    return this.http.get<Sensor>(url,{headers:this.headers});
  }

  create(sensor: Sensor): Observable<Sensor> {
    return this.http.post<Sensor>(`${this.apiUrl}`, sensor,{headers:this.headers});
  }

  update(_id: number, sensor: Sensor): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${_id}`, sensor,{headers:this.headers});
  }

  delete(_id: number): Observable<Sensor> {
    const url = `${this.apiUrl}/${_id}`;
    return this.http.delete<Sensor>(url,{headers:this.headers});
  }

  obtenerDatos(id: number): Observable<Sensor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Sensor>(url,{headers:this.headers});
  }

  
}
