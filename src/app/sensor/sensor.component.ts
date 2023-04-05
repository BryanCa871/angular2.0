import { Component, OnInit } from '@angular/core';
import { Sensor } from '../sensor';
import { SensorService } from '../sensor.service';


@Component({
  selector: 'app-sensor',
  styleUrls: ['./sensor.component.css'],
  templateUrl: './sensor.component.html',
})
export class SensorComponent implements OnInit {
  sensores: Sensor[] = [];
  currentSensor: Sensor = new Sensor();
  errorMsg: string = ''; // Agregar esta línea

  constructor(private sensorService: SensorService) { }

  ngOnInit() {
    this.read();
  }

  read(): void {
    try {
      this.sensorService.read()
        .subscribe(sensores => this.sensores = sensores);
    } catch (error) {
      this.errorMsg = 'Error al obtener los datos del servidor';
    }
  }

 

  deleteUser(user: any) {
    this.sensorService.delete(user._id).subscribe(
      response => {
        console.log(response);
        this.read();
      },
      error => {
        console.log(error);
      });
  }

  editUser(user: any) {
    this.currentSensor = user;
  }
}
