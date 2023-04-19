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
        nombre: "temperaturaa",
        tipo: "dhta",
        ubicacion: "pareda",
        descripcion: "midea",
        fecha_creacion: "221",
        pines: "",
        type: "",
        value: "",
        unidad: "",
        id: this.sensorId
      };
      this.sensorService.agregarSensorTemperatura(temperaturaSensor).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }

    if (sensor.humo) {
      const temperaturaSensor: AgregarSensor = {
        nombre: "humo",
        tipo: "humo",
        ubicacion: "humo",
        descripcion: "humo",
        fecha_creacion: "11",
        pines: "",
        type: "",
        value: "",
        unidad: "",
        id: this.sensorId
      };
      this.sensorService.agregarSensorTemperatura(temperaturaSensor).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }

    if (sensor.luz) {
      const temperaturaSensor: AgregarSensor = {
        nombre: "luz",
        tipo: "luz",
        ubicacion: "luz",
        descripcion: "luz",
        fecha_creacion: "11",
        pines: "",
        type: "",
        value: "",
        unidad: "",
        id: this.sensorId
      };
      this.sensorService.agregarSensorTemperatura(temperaturaSensor).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }

    if (sensor.movimiento) {
      const temperaturaSensor: AgregarSensor = {
        nombre: "movimiento",
        tipo: "movimiento",
        ubicacion: "movimiento",
        descripcion: "movimiento",
        fecha_creacion: "11",
        pines: "",
        type: "",
        value: "",
        unidad: "",
        id: this.sensorId
      };
      this.sensorService.agregarSensorTemperatura(temperaturaSensor).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }

    if (sensor.magnetico) {
      const temperaturaSensor: AgregarSensor = {
        nombre: "magnetico",
        tipo: "magnetico",
        ubicacion: "magnetico",
        descripcion: "magnetico",
        fecha_creacion: "11",
        pines: "",
        type: "",
        value: "",
        unidad: "",
        id: this.sensorId
      };
      this.sensorService.agregarSensorTemperatura(temperaturaSensor).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }

    if (sensor.voltaje) {
      const temperaturaSensor: AgregarSensor = {
        nombre: "voltaje",
        tipo: "voltaje",
        ubicacion: "voltaje",
        descripcion: "voltaje",
        fecha_creacion: "11",
        pines: "",
        type: "",
        value: "",
        unidad: "",
        id: this.sensorId
      };
      this.sensorService.agregarSensorTemperatura(temperaturaSensor).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }

    if (sensor.sonido) {
      const temperaturaSensor: AgregarSensor = {
        nombre: "sonido",
        tipo: "sonido",
        ubicacion: "sonido",
        descripcion: "sonido",
        fecha_creacion: "11",
        pines: "",
        type: "",
        value: "",
        unidad: "",
        id: this.sensorId
      };
      this.sensorService.agregarSensorTemperatura(temperaturaSensor).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }

    if (sensor.fuego) {
      const temperaturaSensor: AgregarSensor = {
        nombre: "fuego",
        tipo: "fuego",
        ubicacion: "fuego",
        descripcion: "fuego",
        fecha_creacion: "11",
        pines: "",
        type: "",
        value: "",
        unidad: "",
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
