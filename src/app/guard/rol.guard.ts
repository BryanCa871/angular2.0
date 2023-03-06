import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {
  private user:User = new User;
  constructor(private login: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const miArreglo = route.data['roles']
    this.login.user().subscribe({
      next: (response) =>{this.user = response},
      error: () => {}
    })
    if(miArreglo.includes(this.user.rol_id)) {
      return true;}
    
    else {
      console.log("No posees permisos")
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
