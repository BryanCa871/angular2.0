import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from '../autor';
import { AutorService } from '../autor.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editorial-editar',
  templateUrl: './autor-editar.component.html',
  styleUrls: ['./autor-editar.component.css']
})
export class AutorEditarComponent implements OnInit {
  id!: number;
  autor: Autor = new Autor();
  autorForm!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private autorService: AutorService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.autorForm = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)])    });

    this.autorService.getById(this.id).subscribe((data: Autor) => {
      this.autor = data; // asignamos los datos del alumno recuperado a la propiedad alumno
      this.autorForm.patchValue(data); // actualizamos los valores del formulario con los datos recuperados
    });
  }

  updateAutor(): void {
    this.autorService.update(this.id, this.autorForm.value)
      .subscribe(data => {
        console.log(data);
        this.autor = new Autor();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.updateAutor();
  }

  gotoList(): void {
    this.router.navigate(['/autor']);
  }
}