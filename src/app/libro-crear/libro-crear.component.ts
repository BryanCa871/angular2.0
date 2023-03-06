import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Autor } from '../autor';
import { AutorService } from '../autor.service';
import { Editorial } from '../editorial';
import { EditorialService } from '../editoriales.service';
import { Pais } from '../pais';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-libro-crear',
  templateUrl: './libro-crear.component.html',
  styleUrls: ['./libro-crear.component.css']
})
export class LibroCrearComponent implements OnInit{
  libroForm: FormGroup;
  libro: Libro = new Libro();
  autores: Autor[] =  [];
  editoriales:Editorial[]=[];
  paises:Pais[]=[]
  autoresActivos:Autor[]=[];
  editorialesActivos:Editorial[]=[];
  paisesActivos:Pais[]=[];

  constructor(private libroService: LibroService, private fb: FormBuilder, private router: Router, private autorService: AutorService,
    private editorialService: EditorialService, private paisService: PaisService) {
    this.libroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(60), Validators.pattern(/^[a-zA-Z0-9\s]*$/)]],
      fk_autor: ['', Validators.required],
      fk_editorial: ['', Validators.required],
      fecha_de_publicacion: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10), Validators.pattern(/^([0-9]{2})[-\/]([0-9]{2})[-\/]([0-9]{4})$/)]],
      fk_pais: ['', Validators.required],
      numero_de_paginas: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(4), Validators.pattern(/^[0-9]*$/)]],

    });
   }

  ngOnInit(): void {
    
    this.autorService.read().subscribe((autores) => {
      this.autores = autores;
      this.autoresActivos = this.autores.filter(a => a.status === 1);
    });

    this.editorialService.read().subscribe((editoriales) => {
      this.editoriales = editoriales;
      this.editorialesActivos = this.editoriales.filter(a => a.status === 1);
    });

    this.paisService.read().subscribe((paises) => {
      this.paises = paises;
      this.paisesActivos = this.paises.filter(a => a.status === 1);
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

  createLibro(): void {
    this.libroService.create(this.libroForm.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/libro']);
      },
      (error) => console.log(error)
    );
  }

  
}