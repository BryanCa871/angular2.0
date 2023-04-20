import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviromet } from 'src/enviroment';
@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  constructor(private http: HttpClient) { }

  activacion(form: any): Observable<any>{
    return this.http.put<any>(`http://${Enviromet.url}/Validacion`,form);
  }
}
