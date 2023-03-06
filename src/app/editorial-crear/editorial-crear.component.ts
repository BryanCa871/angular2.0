import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editorial } from '../editorial';
import { EditorialService } from '../editoriales.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editorial-crear',
  templateUrl: './editorial-crear.component.html',
  styleUrls: ['./editorial-crear.component.css']
})
export class EditorialCrearComponent implements OnInit{
  editorialForm: FormGroup;
  editorial: Editorial = new Editorial();

  constructor(private editorialService: EditorialService, private fb: FormBuilder, private router: Router) {
    this.editorialForm = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z\s]*$/)])
    });
   }

  ngOnInit(): void {
  }

  createEditorial(): void {
    this.editorialService.create(this.editorialForm.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/editorial']);
      },
      (error) => console.log(error)
    );
  }

  
}
