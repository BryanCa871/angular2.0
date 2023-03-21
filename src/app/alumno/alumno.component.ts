import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Alumno } from '../alumno';
import { AlumnoService } from '../alumno.service';


@Component({
  selector: 'app-alumno',
  styleUrls: ['./alumno.component.css'],
  templateUrl: './alumno.component.html',
})
export class AlumnoComponent implements OnInit, OnDestroy {
  alumnos: Alumno[] = [];
  currentAlumno: Alumno = new Alumno();
  pollingSubscription!: Subscription;

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.polling();
  }

  ngOnDestroy() {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
  }

  polling() {
    this.pollingSubscription = interval(2000).subscribe(() => {
      this.read();
    });
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
