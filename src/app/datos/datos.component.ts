import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sensor } from '../sensor';
import { SensorService } from '../sensor.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Enviromet } from 'src/enviroment';

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
      if(data === null){
        this.sensor.type = "No hay datos"
        this.sensor.value = "No hay datos"
        this.sensor.unidad = "No hay datos"
      }
      else{
        this.sensor = data
        //console.log(this.sensor)
      }
       // asignamos los datos del alumno recuperado a la propiedad alumno
      this.sensorForm.patchValue(data); // actualizamos los valores del formulario con los datos recuperados
    }, (error) => {
        this.sensor.type = "No hay datos"
        this.sensor.value = "No hay datos"
        this.sensor.unidad = "No hay datos"
    });

    const stream = new EventSource(`http://${Enviromet.url}/stream`);
    stream.addEventListener('message',(event) => {
      if(event.data){
        this.sensorService.obtenerDatos(this.id).subscribe((data: Sensor) => {
        this.sensor = data; // asignamos los datos del alumno recuperado a la propiedad alumno
        this.sensorForm.patchValue(data); // actualizamos los valores del formulario con los datos recuperados
        });
      }
      else{
        console.log("error")
      }
    })
  }
  getMensaje(value: string, type: string): string {
    if (type === 'luz') {
      const luzValue = parseInt(value);
      if (luzValue > 450) {
        return 'No Hay luz';
      } else {
        return 'Hay luz';
      }
    } else if (type === 'magnetico') {
      const magneticoValue = parseInt(value);
      if (magneticoValue === 1) {
        return 'Puerta abierta';
      } else {
        return 'Puerta cerrada';
      }
    }
    else if(type === 'corriente'){
      const corrienteValue = parseInt(value);
      if(corrienteValue > 1){
        return 'Hay corriente';
      }else{
        return 'No hay corriente';
      }
    }
    else if(type === 'sonido'){
      const sonidoValue = parseInt(value);
      if(sonidoValue > 30){
        return 'Hay ruido';
      }else{
        return 'No hay sonido o poco sonido';
      }
    }
    else if(type === 'flama'){
      const flamaValue = parseInt(value);
      if(flamaValue > 1){
        return 'Hay flama';
      }else{
        return 'No hay flama';
      }
    }
    else if(type === 'humo'){
      const humoValue = parseInt(value);
      if(humoValue > 1){
        return 'Hay humo';
      }else{
        return 'No hay humo';
      }
    }else if(type === 'presencia'){
      const presenciaValue = parseInt(value);
      if(presenciaValue > 1){
        return 'Hay presencia';
      }else{
        return 'No hay presencia';
      }
    }else if(type === 'temperatura'){
        return value;
    }
    else {
      return 'No hay datos';
    }
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
