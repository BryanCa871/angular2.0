import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class EstadoGuard implements CanActivate {
  private user:User = new User;
  constructor(private login: LoginService, private router: Router){}
  private estado:boolean = false
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean {
      this.login.user().subscribe({
        next: (response) => {
          if (response.active == 1) {
            return true;
          } else {
            console.log("Cuenta no activa");
            this.router.navigate(['/login']);
            return false;
          }
        },
        error: () => {
          console.log("Error al obtener el usuario");
          this.router.navigate(['/login']);
          return false;
        }
      });
      return false;
  }
  
}
