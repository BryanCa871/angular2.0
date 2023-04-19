import { Component, OnInit } from '@angular/core';
import { Sensor } from '../sensor';
import { SensorService } from '../sensor.service';
import { Enviromet } from 'src/enviroment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sensor',
  styleUrls: ['./sensor.component.css'],
  templateUrl: './sensor.component.html',
})
export class SensorComponent implements OnInit {
  sensores: Sensor[] = [];
  currentSensor: Sensor = new Sensor();
  errorMsg: string = '';
  sensorId: string = ''; // Definimos sensorId como propiedad de la clase

  constructor(private sensorService: SensorService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sensorId = this.route.snapshot.paramMap.get('id') || '';
    this.read(this.sensorId);
    const stream = new EventSource(`http://${Enviromet.url}/stream`);
    stream.addEventListener('message', (event) => {
      if (event.data) {
        this.read(this.sensorId);
      } else {
        console.log("error")
      }
    })
  }

  read(sensorId: string): void {
    try {
      this.sensorService.read(sensorId)
        .subscribe(sensores => this.sensores = sensores);
    } catch (error) {
      this.errorMsg = 'Error al obtener los datos del servidor';
    }
  }

  deleteUser(user: any) {
    this.sensorService.delete(user._id).subscribe(
      response => {
        console.log(response);
        this.read(this.sensorId);
      },
      error => {
        console.log(error);
      });
  }

  editUser(user: any) {
    this.currentSensor = user;
  }
}
