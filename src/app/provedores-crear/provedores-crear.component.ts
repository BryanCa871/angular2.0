import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Provedor } from '../interface/provedor';
import { ProvedorService } from '../service/provedor.service';

@Component({
  selector: 'app-provedores-crear',
  templateUrl: './provedores-crear.component.html',
  styleUrls: ['./provedores-crear.component.css']
})
export class ProvedoresCrearComponent {
  provedorForm: FormGroup;
  provedor: Provedor = new Provedor();

  constructor(private provedorService: ProvedorService, private fb: FormBuilder, private router: Router) {
    this.provedorForm = this.fb.group({
      Nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z\s]*$/)]],
      Direccion: ['', [Validators.required,  Validators.minLength(3), Validators.maxLength(120)]],
      Telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
    });
   }

  ngOnInit(): void {
  }

  createProvedor(): void {
    this.provedorService.create(this.provedorForm.value).subscribe(
      (response) => {
        console.log(this.provedorForm.value);
        this.router.navigate(['/provedor']);
      },
      (error) => console.log(Response)
    );
  }

}
