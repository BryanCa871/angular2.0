import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  constructor(private http: HttpClient) { }

  activacion(form: any): Observable<any>{
    return this.http.put<any>(form.url,form);
  }
}
