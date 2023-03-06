import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { RegisterService } from '../register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-crear',
  templateUrl: './register-crear.component.html',
  styleUrls: ['./register-crear.component.css']
})
export class RegisterCrearComponent implements OnInit{
  userForm: FormGroup;
  user: User = new User();

  constructor(private registerService: RegisterService, private fb: FormBuilder, private router: Router) {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      name:  ['', Validators.required],
      phone:  ['', Validators.required],

    });
   }

  ngOnInit(): void {
  }

  createUser(): void {
    this.registerService.create(this.userForm.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/validacion']);
      },
      (error) => console.log(Response)
    );
  }

  
}