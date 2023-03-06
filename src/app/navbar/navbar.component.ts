import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../logout.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UsuarioService } from '../user-table.service';
import { Users } from '../interface/users';
import { User } from '../user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showAutomotriz = false;
  showEditorial = false;
  usuario:User = new User();

  constructor(private logout: LogoutService, private router: Router,public auth: AuthService, private login:LoginService) {
    const path = window.location.pathname;
    if (path.includes('/automotriz')) {
      this.showAutomotriz = true;
    } else if (path.includes('/editorial')) {
      this.showEditorial = true;
    }

  }

  ngOnInit(){
    this.read();
  }

  
 read():void{ this.login.user().subscribe({
    next:(usuario => this.usuario = usuario),
    error :(error)=> {console.log(error)}
  })
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
}
