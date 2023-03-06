import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) { }

  public isAuthenticated(): boolean {
    const token = this.cookieService.get('token');
    return token !== '';
  }

  public logout(): void {
    this.cookieService.delete('token');
  }
}