import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from './alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private apiUrl = 'http://127.0.0.1:8000/alumnos';

  constructor(private http: HttpClient) { }

  read(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.apiUrl);
  }

  getById(id: number): Observable<Alumno> {
    const url = `${this.apiUrl}/${id}/edit`;
    return this.http.get<Alumno>(url);
  }

  create(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(`${this.apiUrl}/crear`, alumno);
  }

  update(id: number, alumno: Alumno): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}/edit`, alumno);
  }

  delete(id: number): Observable<Alumno> {
    const url = `${this.apiUrl}/destroy/${id}`;
    return this.http.delete<Alumno>(url);
  }

  
}


