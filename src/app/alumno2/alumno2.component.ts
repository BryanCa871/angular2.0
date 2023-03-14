import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Alumno } from '../alumno';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-alumno2',
  templateUrl: './alumno2.component.html',
  styleUrls: ['./alumno2.component.css']
})
export class Alumno2Component implements OnInit {
  alumnos: Alumno[] = [];
  currentAlumno: Alumno = new Alumno();

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.read();
    const stream = new EventSource('http://127.0.0.1:3333/stream');
    stream.addEventListener('message', (event) => {
      if(event.data){
        this.read();
      }
      else{
        console.log("error")
      }})
  }


  read(): void {
    this.alumnoService.read()
      .subscribe(alumnos => this.alumnos = alumnos);
  }

 

  deleteUser(user: any) {
    this.alumnoService.delete(user.id).subscribe(
      response => {
        console.log(response);
        this.read();
      },
      error => {
        console.log(error);
      });
  }

  editUser(user: any) {
    this.currentAlumno = user;
  }
}


