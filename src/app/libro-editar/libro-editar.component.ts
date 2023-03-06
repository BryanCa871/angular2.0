import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';
import { Editorial } from '../editorial';
import { EditorialService } from '../editoriales.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pais } from '../pais';
import { PaisService } from '../pais.service';

import { Autor } from '../autor';
import { AutorService } from '../autor.service';

@Component({
  selector: 'app-libro-editar',
  templateUrl: './libro-editar.component.html',
  styleUrls: ['./libro-editar.component.css']
})
export class LibroEditarComponent implements OnInit {
  id!: number;
  libro: Libro = new Libro();
  libroForm!: FormGroup;
  editoriales:Editorial[]=[];
  paises:Pais[]=[];
  autores: Autor[] =  [];



  constructor(private route: ActivatedRoute, private router: Router, private libroService: LibroService, private fb: FormBuilder,
    private editorialService: EditorialService,private paisService: PaisService,private autorService: AutorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.libroForm = this.fb.group({
      nombre: ['', Validators.required],
      fk_autor: ['', Validators.required],
      fk_editorial: ['', Validators.required],
      fecha_de_publicacion: ['', Validators.required],
      fk_pais: ['', Validators.required],
      numero_de_paginas: ['', Validators.required],
    });

    this.libroService.getById(this.id).subscribe((data: Libro) => {
      this.libro = data; // asignamos los datos del alumno recuperado a la propiedad alumno
      this.libroForm.patchValue(data); // actualizamos los valores del formulario con los datos recuperados
    });

    this.autorService.read().subscribe(
      (autores: Autor[]) => {
        this.autores = autores;
      },
      (error) => console.log(error)
    );
  
    this.editorialService.read().subscribe(
      (editoriales: Editorial[]) => {
        this.editoriales = editoriales;
      },
      (error) => console.log(error)
    );
  
    this.paisService.read().subscribe(
      (paises: Pais[]) => {
        this.paises = paises;
      },
      (error) => console.log(error)
    );
  }

  updateLibro(): void {
    this.libroService.update(this.id, this.libroForm.value)
      .subscribe(data => {
        console.log(data);
        this.libro = new Libro();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.updateLibro();
  }

  gotoList(): void {
    this.router.navigate(['/libro']);
  }
}
