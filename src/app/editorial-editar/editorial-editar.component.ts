import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Editorial } from '../editorial';
import { EditorialService } from '../editoriales.service';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';

@Component({
  selector: 'app-editorial-editar',
  templateUrl: './editorial-editar.component.html',
  styleUrls: ['./editorial-editar.component.css']
})
export class EditorialEditarComponent implements OnInit {
  id!: number;
  editorial: Editorial = new Editorial();
  editorialForm!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private editorialService: EditorialService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.editorialForm = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z\s]*$/)])
    });

    this.editorialService.getById(this.id).subscribe((data: Editorial) => {
      this.editorial = data; // asignamos los datos del alumno recuperado a la propiedad alumno
      this.editorialForm.patchValue(data); // actualizamos los valores del formulario con los datos recuperados
    });
  }

  updateEditorial(): void {
    this.editorialService.update(this.id, this.editorialForm.value)
      .subscribe(data => {
        console.log(data);
        this.editorial = new Editorial();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.updateEditorial();
  }

  gotoList(): void {
    this.router.navigate(['/editorial']);
  }
}