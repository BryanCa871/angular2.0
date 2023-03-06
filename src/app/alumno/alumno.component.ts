import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';
import { AlumnoService } from '../alumno.service';


@Component({
  selector: 'app-alumno',
  styleUrls: ['./alumno.component.css'],
  templateUrl: './alumno.component.html',
})
export class AlumnoComponent implements OnInit {
  alumnos: Alumno[] = [];
  currentAlumno: Alumno = new Alumno();

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.read();
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


