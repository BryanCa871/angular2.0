import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from '../alumno';
import { AlumnoService } from '../alumno.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-editar',
  templateUrl: './alumno-editar.component.html',
  styleUrls: ['./alumno-editar.component.css']
})
export class AlumnoEditar2Component implements OnInit {
  id!: number;
  alumno: Alumno = new Alumno();
  alumnoForm!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private alumnoService: AlumnoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', Validators.required],
      telefono: ['', Validators.required]
    });

    this.alumnoService.getById(this.id).subscribe((data: Alumno) => {
      this.alumno = data; // asignamos los datos del alumno recuperado a la propiedad alumno
      this.alumnoForm.patchValue(data); // actualizamos los valores del formulario con los datos recuperados
    });
  }

  updateAlumno(): void {
    this.alumnoService.update(this.id, this.alumnoForm.value)
      .subscribe(data => {
        console.log(data);
        this.alumno = new Alumno();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.updateAlumno();
  }

  gotoList(): void {
    this.router.navigate(['/eventsource']);
  }
}