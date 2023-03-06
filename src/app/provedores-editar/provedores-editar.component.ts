import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Provedor } from '../interface/provedor';
import { ProvedorService } from '../service/provedor.service';

@Component({
  selector: 'app-provedores-editar',
  templateUrl: './provedores-editar.component.html',
  styleUrls: ['./provedores-editar.component.css']
})
export class ProvedoresEditarComponent {
  id!: number;
  provedor: Provedor = new Provedor();
 provedorForm!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private provedorService: ProvedorService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.provedorForm = this.fb.group({
      Nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z\s]*$/)]],
      Direccion: ['', [Validators.required,  Validators.minLength(3), Validators.maxLength(120)]],
      Telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
    });

    this.provedorService.getById(this.id).subscribe((data: Provedor) => {
      this.provedor = data; // asignamos los datos del alumno recuperado a la propiedad alumno
      this.provedorForm.patchValue(data); // actualizamos los valores del formulario con los datos recuperados
    });
  }

  updateProvedor(): void {
    this.provedorService.update(this.id, this.provedorForm.value)
      .subscribe(data => {
        console.log(this.provedorForm);
        this.provedor = new Provedor();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.updateProvedor();
  }

  gotoList(): void {
    this.router.navigate(['/provedor']);
  }
}
