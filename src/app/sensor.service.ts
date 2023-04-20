import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensor } from './sensor';
import { LoginService } from './login.service';
import { Enviromet } from 'src/enviroment';
import { AgregarSensor } from './agregar-sensor';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.loginService.getToken()}`
  });
  private apiUrl = `http://${Enviromet.url}/api/v2/sensores`;

  constructor(private http: HttpClient, private loginService: LoginService) { }

  read(id: string): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(`http://${Enviromet.url}/api/v2/sensores/obtener/${id}`, { headers: this.headers });
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

  agregarSensor(sensor: Sensor): Observable<Sensor> {
    const id =sensor.id
    return this.http.post<Sensor>(`http://${Enviromet.url}/api/v2/sensores/${id}`, { sensores: [sensor] }, { headers: this.headers });
}

agregarSensorTemperatura(sensor: AgregarSensor): Observable<AgregarSensor> {
  const id =sensor.id
  return this.http.post<AgregarSensor>(`http://${Enviromet.url}/api/v2/sensores/${id}`, { sensores: [sensor] }, { headers: this.headers });
}

  
}
