import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor(private cookieService: CookieService) { 
  }

  public isAuthenticated(): boolean {
    const token = this.cookieService.get('token');
    return token !== '';
  }

  public get isAuthenticated$() {
    return this.isAuthenticatedSubject.asObservable();
  }

  public logout(): void {
    this.cookieService.delete('token');
    this.isAuthenticatedSubject.next(false);
  }
}