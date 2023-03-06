import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empleado-crear',
  templateUrl: './empleado-crear.component.html',
  styleUrls: ['./empleado-crear.component.css']
})
export class EmpleadoCrearComponent implements OnInit{
  empleadoForm: FormGroup;
  empleado: Empleado = new Empleado();

  constructor(private empleadoService: EmpleadoService, private fb: FormBuilder, private router: Router) {
    this.empleadoForm = this.fb.group({
      Nombre:  ['', [Validators.required, Validators.minLength(3), Validators.maxLength(60), Validators.pattern(/^[a-zA-Z0-9\s]*$/)]],
      Ap_paterno: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z\s]*$/)]],
    Ap_materno: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z\s]*$/)]],
      Edad: ['',[ Validators.required,Validators.pattern(/^[0-9]*$/), Validators.minLength(1),Validators.maxLength(3)]],
      Correo: ['', [Validators.required, Validators.maxLength(65), Validators.email]],
    Telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
    });
   }

  ngOnInit(): void {
  }

  createEmpleado(): void {
    this.empleadoService.create(this.empleadoForm.value).subscribe(
      (response) => {
        console.log(this.empleadoForm.value);
        this.router.navigate(['/empleado']);
      },
      (error) => console.log(Response)
    );
  }

  
}