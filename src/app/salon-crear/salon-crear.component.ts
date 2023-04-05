import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salon } from '../salon';
import { SalonService } from '../salon.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-salon-crear',
  templateUrl: './salon-crear.component.html',
  styleUrls: ['./salon-crear.component.css']
})
export class SalonCrearComponent implements OnInit{
  salonForm: FormGroup;
  salon: Salon = new Salon();
  usuarios: User =  new User();
  usuariosActivos: User[] = [];

  constructor(private salonService: SalonService, private fb: FormBuilder, private router: Router) {
    this.salonForm = this.fb.group({
      ubicacion: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]),
      idUsuario: new FormControl('', Validators.required)
    });
  }
  

  ngOnInit(): void {
    console.log('Before API call:', this.usuarios);
    this.salonService.obtenerUser().subscribe(
      (usuarios: User) => {
        this.usuarios = usuarios;
        console.log('After API call:', this.usuarios);
      },
      (error) => console.log(error)
    );
  }
  

  createSensor(): void {
    this.salonService.create(this.salonForm.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/salon']);
      },
      (error) => console.log(error)
    );
  }

  
}