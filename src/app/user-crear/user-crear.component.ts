import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { LoginService } from '../login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-crear',
  templateUrl: './user-crear.component.html',
  styleUrls: ['./user-crear.component.css']
})
export class UserCrearComponent implements OnInit{
  userForm: FormGroup;
  user: User = new User();
  rolUser : User = new User;

  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  createUser(): void {
    this.loginService.create(this.userForm.value).subscribe({
      next:(response) => {
        this.loginService.setToken(response.token);
        //localStorage.setItem("Role", response.Role);
        //localStorage.setItem("Estado", response.Estado);
        //localStorage.setItem("token", response.token)
        this.loginService.user().subscribe({
          next: (response) => {
            //console.log(this.loginService.getToken());
            if(this.loginService.isAdmin == true){
              this.router.navigate(['/lista'])
            }
            else{
              this.router.navigate(['/lista']);
            }
          },
          error:(error) => {console.log(error)}
        })
      },
      error:(error) => console.log(error)
  });
    
  }
}