import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pais } from '../pais';
import { PaisService } from '../pais.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pais-editar',
  templateUrl: './pais-editar.component.html',
  styleUrls: ['./pais-editar.component.css']
})
export class PaisEditarComponent implements OnInit {
  id!: number;
  pais: Pais = new Pais();
  paisForm!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private paisService: PaisService, private fb: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.paisForm = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z\s]*$/)])    });

    this.paisService.getById(this.id).subscribe((data: Pais) => {
      this.pais = data; // asignamos los datos del alumno recuperado a la propiedad alumno
      this.paisForm.patchValue(data); // actualizamos los valores del formulario con los datos recuperados
    });
  }

  updatePais(): void {
    this.paisService.update(this.id, this.paisForm.value)
      .subscribe(data => {
        console.log(data);
        this.pais = new Pais();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.updatePais();
  }

  gotoList(): void {
    this.router.navigate(['/pais']);
  }
}