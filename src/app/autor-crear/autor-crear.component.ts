import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Autor } from '../autor';
import { AutorService } from '../autor.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editorial-crear',
  templateUrl: './autor-crear.component.html',
  styleUrls: ['./autor-crear.component.css']
})
export class AutorCrearComponent implements OnInit{
  autorForm: FormGroup;
  autor: Autor = new Autor();

  constructor(private autorService: AutorService, private fb: FormBuilder, private router: Router) {
    this.autorForm = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)])
    });
   }

  ngOnInit(): void {
  }

  createAutor(): void {
    this.autorService.create(this.autorForm.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/autor']);
      },
      (error) => console.log(error)
    );
  }

  
}