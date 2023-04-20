import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Sensor } from '../sensor';
import { SensorService } from '../sensor.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AgregarSensor } from '../agregar-sensor';


@Component({
  selector: 'app-agregar-sensor',
  templateUrl: './agregar-sensor.component.html',
  styleUrls: ['./agregar-sensor.component.css']
})
export class AgregarSensorComponent {
  sensorForm: FormGroup;
  sensor: Sensor = new Sensor();
  sensorId: string;

  constructor(private sensorService: SensorService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.sensorForm = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]),
      tipo: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]),
      ubicacion: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]),
      pines: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern(/^[0-9,]*$/)]),
      fecha_creacion: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)
      ]),
      temperatura: new FormControl(false),
      humo: new FormControl(false),
      luz: new FormControl(false),
      movimiento: new FormControl(false),
      magnetico: new FormControl(false),
      voltaje: new FormControl(false),
      sonido: new FormControl(false),
      fuego   : new FormControl(false),
    });

    // Obtén el ID del sensor de la ruta actual
    this.sensorId = this.route.snapshot.paramMap.get('id') ?? '';
  }

  createSensor(): void {
    
    const sensor = { ...this.sensorForm.value, id: this.sensorId };
    if (sensor.temperatura) {
      console.log("temperatura");
      const temperaturaSensor: AgregarSensor = {
        nombre: "Sensor de Temperatura",
        tipo: "Sensor",
        ubicacion: "Pared",
        descripcion: "Sensor de temperatura para el control de temperatura en el salón",
        fecha_creacion: "21/04/2023",
        pines: "12",
        type: "temperatura",
        unidad: "Celsius",
        id: this.sensorId
      };
      this.sensorService.agregarSensorTemperatura(temperaturaSensor).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }

    if (sensor.humo) {
      const temperaturaSensor: AgregarSensor = {
        nombre: "Sensor de Humo",
        tipo: "Sensor",
        ubicacion: "Salon",
        descripcion: "Sensor de humo para detectar la presencia de humo en el salón",
        fecha_creacion: "21/04/2023",
        pines: "11",
        type: "humo",
        unidad:  "N/A",
        id: this.sensorId
      };
      this.sensorService.agregarSensorTemperatura(temperaturaSensor).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }

    if (sensor.luz) {
      const temperaturaSensor: AgregarSensor = {
        nombre: "Sensor de Luz ",
        tipo: "Sensor",
        ubicacion: "Pared",
        descripcion: "Sensor de luz para detectar los niveles de luz en el salón",
        fecha_creacion: "21/04/2023",
        pines: "A0",
        type: "luz",
        unidad: "Ohmios",
        id: this.sensorId
      };
      this.sensorService.agregarSensorTemperatura(temperaturaSensor).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }

    if (sensor.movimiento) {
      const temperaturaSensor: AgregarSensor = {
        nombre: "Sensor de Movimiento",
        tipo: "Sensor",
        ubicacion: "Pared",
        descripcion: "Sensor de movimiento para detectar la presencia de personas en el salón",
        fecha_creacion: "21/04/2023",
        pines: "10",
        type: "presencia",
        unidad: "N/A",
        id: this.sensorId
      };
      this.sensorService.agregarSensorTemperatura(temperaturaSensor).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }

    if (sensor.magnetico) {
      const temperaturaSensor: AgregarSensor = {
        nombre: "Sensor Magnético",
        tipo: "Sensor",
        ubicacion: "Puerta principal",
        descripcion: "Sensor magnético para detectar la apertura y cierre de la puerta principal",
        fecha_creacion: "21/04/2023",
        pines: "3",
        type: "magnetico",
        unidad: "N/A",
        id: this.sensorId
      };
      this.sensorService.agregarSensorTemperatura(temperaturaSensor).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }

    if (sensor.voltaje) {
      const temperaturaSensor: AgregarSensor = {
        nombre: "Sensor de Voltaje",
        tipo: "Sensor",
        ubicacion: "Suelo",
        descripcion: "Sensor de voltaje para medir la presencia de este mismo",
        fecha_creacion: "21/04/2023",
        pines: "A2",
        type: "corriente",
        unidad: "V",
        id: this.sensorId
      };
      this.sensorService.agregarSensorTemperatura(temperaturaSensor).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }

    if (sensor.sonido) {
      const temperaturaSensor: AgregarSensor = {
        nombre: "Sensor de Sonido",
        tipo: "Sensor",
        ubicacion: "Pared",
        descripcion: "Sensor de sonido para medir el nivel de ruido en el salón",
        fecha_creacion: "21/04/2023",
        pines: "A1",
        type: "sonido",
        unidad: "dB",
        id: this.sensorId
      };
      this.sensorService.agregarSensorTemperatura(temperaturaSensor).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }

    if (sensor.fuego) {
      const temperaturaSensor: AgregarSensor = {
        nombre: "Sensor de Fuego",
        tipo: "Sensor",
        ubicacion: "Salon",
        descripcion: "fuego",
        fecha_creacion: "21/04/2023",
        pines: "7",
        type: "flama",
        unidad: "N/A",
        id: this.sensorId
      };
      this.sensorService.agregarSensorTemperatura(temperaturaSensor).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }



    this.router.navigate(['/salon']);


  }
}
