import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sensor } from '../sensor';
import { SensorService } from '../sensor.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sensor-crear',
  templateUrl: './sensor-crear.component.html',
  styleUrls: ['./sensor-crear.component.css']
})
export class SensorCrearComponent implements OnInit{
  sensorForm: FormGroup;
  sensor: Sensor = new Sensor();

  constructor(private sensorService: SensorService, private fb: FormBuilder, private router: Router) {
    this.sensorForm = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]),
      tipo: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]),
      ubicacion: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]),
      pines: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern(/^[0-9,]*$/)]),
      fecha_creacion: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)
      ]),    });
   }

  ngOnInit(): void {
  }

  createSensor(): void {
    this.sensorService.create(this.sensorForm.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/sensor']);
      },
      (error) => console.log(error)
    );
  }

  
}