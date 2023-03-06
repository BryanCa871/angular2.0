import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from '../pais';
import { PaisService } from '../pais.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pais-crear',
  templateUrl: './pais-crear.component.html',
  styleUrls: ['./pais-crear.component.css']
})
export class PaisCrearComponent implements OnInit{
  paisForm: FormGroup;
  pais: Pais = new Pais();

  constructor(private paisService: PaisService, private fb: FormBuilder, private router: Router) {
    this.paisForm = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z\s]*$/)])
    });
   }

  ngOnInit(): void {
  }

  createPais(): void {
    this.paisService.create(this.paisForm.value).subscribe(
      (response) => {
        console.log(this.paisForm.value);
        this.router.navigate(['/pais']);
      },
      (error) => console.log(Response)
    );
  }

  
}