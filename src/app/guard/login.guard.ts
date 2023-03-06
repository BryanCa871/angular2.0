import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  private respuesta: boolean = false;
  constructor(private login: LoginService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const miArreglo = route.data['roles']
     this.login.user().subscribe({next: (response) => {
      if (response.active == 1 && miArreglo.includes(response.rol_id)) {
        this.respuesta = true;
      } else {
        console.log("Cuenta no activa o no posees permisos");
        this.router.navigate(['/login']);
      }
    },
    error: (error) => {
      console.log(error)
      console.log("Error al obtener el usuario");
      this.router.navigate(['/login']);
    }
  })
    return this.respuesta;
  }
  
}
