import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from '../alumno';
import { AlumnoService } from '../alumno.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-crear',
  templateUrl: './alumno-crear.component.html',
  styleUrls: ['./alumno-crear.component.css']
})
export class AlumnoCrear2Component implements OnInit{
  alumnoForm: FormGroup;
  alumno: Alumno = new Alumno();

  constructor(private alumnoService: AlumnoService, private fb: FormBuilder, private router: Router) {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', Validators.required],
      telefono: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  createAlumno(): void {
    this.alumnoService.create(this.alumnoForm.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/eventsource']);
      },
      (error) => console.log(error)
    );
  }

  
}
