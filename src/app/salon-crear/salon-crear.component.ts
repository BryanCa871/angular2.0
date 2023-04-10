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

  constructor(private salonService: SalonService, private fb: FormBuilder, private router: Router) {
    this.salonForm = this.fb.group({
      ubicacion: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]),
    
    });
  }
  

  ngOnInit(): void {
  }
  

  createSalon(): void {
    this.salonService.create(this.salonForm.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/salon']);
      },
      (error) => console.log(error)
    );
  }

  
}