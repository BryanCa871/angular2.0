import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Salon } from '../salon';
import { SalonService } from '../salon.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-salon-editar',
  templateUrl: './salon-editar.component.html',
  styleUrls: ['./salon-editar.component.css']
})
export class SalonEditarComponent implements OnInit {
  id!: number;
  salon: Salon = new Salon();
  salonForm!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private salonService: SalonService, private fb: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.salonForm = this.fb.group({
      ubicacion: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]),
       });

    this.salonService.getById(this.id).subscribe((data: Salon) => {
      this.salon = data; // asignamos los datos del alumno recuperado a la propiedad alumno
      this.salonForm.patchValue(data); // actualizamos los valores del formulario con los datos recuperados
    });
  }

  updateSalon(): void {
    this.salonService.update(this.id, this.salonForm.value)
      .subscribe(data => {
        console.log(data);
        this.salon = new Salon();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.updateSalon();
  }

  gotoList(): void {
    this.location.back();
  }
}