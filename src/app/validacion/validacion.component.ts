import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidacionService } from '../validacion.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.component.html',
  styleUrls: ['./validacion.component.css']
})
export class ValidacionComponent implements OnInit{

  validacionForm: FormGroup;

  constructor(private validacion:ValidacionService, private fb: FormBuilder, private router: Router) {
    this.validacionForm = this.fb.group({
      Correo: ['', Validators.required],
      Verificacion: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  activar(): void {
    console.log(this.validacionForm.value);
    this.validacion.activacion(this.validacionForm.value).subscribe(
      (response) => {
        console.log(this.validacionForm.value);
        this.router.navigate(['/login']);
      },
      (error) => console.log(error)
    );
  }

}
