import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empleado-editar',
  templateUrl: './empleado-editar.component.html',
  styleUrls: ['./empleado-editar.component.css']
})
export class EmpleadoEditarComponent implements OnInit {
  id!: number;
  empleado: Empleado = new Empleado();
 empleadoForm!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private empleadoService: EmpleadoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.empleadoForm = this.fb.group({
      Nombre:  ['', [Validators.required, Validators.minLength(3), Validators.maxLength(60), Validators.pattern(/^[a-zA-Z0-9\s]*$/)]],
      Ap_paterno: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z\s]*$/)]],
    Ap_materno: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z\s]*$/)]],
      Edad: ['',[ Validators.required,Validators.pattern(/^[0-9]*$/), Validators.minLength(1),Validators.maxLength(3)]],
      Correo: ['', [Validators.required, Validators.maxLength(65), Validators.email]],
    Numero: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
    });

    this.empleadoService.getById(this.id).subscribe((data: Empleado) => {
      this.empleado = data; // asignamos los datos del alumno recuperado a la propiedad alumno
      this.empleadoForm.patchValue(data); // actualizamos los valores del formulario con los datos recuperados
    });
  }

  updateEmpleado(): void {
    this.empleadoService.update(this.id, this.empleadoForm.value)
      .subscribe(data => {
        console.log(this.empleadoForm);
        this.empleado = new Empleado();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.updateEmpleado();
  }

  gotoList(): void {
    this.router.navigate(['/empleado']);
  }
}