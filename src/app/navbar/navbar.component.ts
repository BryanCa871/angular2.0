import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../logout.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UsuarioService } from '../user-table.service';
import { User } from '../user';
import { LoginService } from '../login.service';
import { interval, timeInterval } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showAutomotriz = false;
  showEditorial = false;
  usuario:User = new User();
  usuarioCargado = false; // variable para indicar si el usuario ya fue cargado
  isAdmin: boolean = false;


  constructor(private logout: LogoutService, private router: Router,public auth: AuthService, private login:LoginService) {
    const path = window.location.pathname;
    if (path.includes('/automotriz')) {
      this.showAutomotriz = true;
    } else if (path.includes('/editorial')) {
      this.showEditorial = true;
    }

  }

  ngOnInit(): void {
    this.login.user().subscribe();
    //this.isAdmin = this.login.getRole() === "1";
    interval(1000).subscribe(() => {
      this.isAdmin = this.login.isAdmin
    });
  }

  
  read(): void {
    this.login.user().subscribe({
      next: (usuario => {
        this.usuario = usuario;
        this.usuarioCargado = true;
        this.isAdmin = this.auth.isAuthenticated() && this.usuario.rol_id == 1;
      }),
      error: (error) => {
        console.log(error)
      }
    });
  }



  deleteSesion() {
    this.logout.deleteTokenDB().subscribe({
      next: (response) => {
        console.log(response);
        this.logout.deleteToken();
        this.router.navigate(["/login"])
    },
    error: (errors) => {
      console.log(errors);    }  
  });
    
  }

  isAdminUser(): boolean {
    return this.login.getRole() === '1';
  }
}
