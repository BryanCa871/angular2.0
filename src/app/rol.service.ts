import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from './rol';
import { LoginService } from './login.service';
import { Enviromet } from 'src/enviroment';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.loginService.getToken()}`
  });
  private apiUrl = `http://${Enviromet.url}/api/v2/roles`;

  constructor(private http: HttpClient, private loginService: LoginService) { }

  read(): Observable<any> {
    return this.http.get<Rol[]>(this.apiUrl,{headers:this.headers});
  }
}