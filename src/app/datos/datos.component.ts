import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sensor } from '../sensor';
import { SensorService } from '../sensor.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit{
  id!: number;
  sensor: Sensor = new Sensor();
  sensorForm!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private sensorService: SensorService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.sensorForm = this.fb.group({
      type: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern(/^[0-9,]*$/)]),
      value: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern(/^[0-9,]*$/)]),
      unidad: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]),   });

    this.sensorService.obtenerDatos(this.id).subscribe((data: Sensor) => {
      this.sensor = data; // asignamos los datos del alumno recuperado a la propiedad alumno
      this.sensorForm.patchValue(data); // actualizamos los valores del formulario con los datos recuperados
    });
  }

  updateSensor(): void {
    this.sensorService.update(this.id, this.sensorForm.value)
      .subscribe(data => {
        console.log(data);
        this.sensor = new Sensor();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.updateSensor();
  }

  gotoList(): void {
    this.router.navigate(['/sensor']);
  }
}
