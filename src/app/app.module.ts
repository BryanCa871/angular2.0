import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterCrearComponent } from './register-crear/register-crear.component';
import { UserCrearComponent } from './user-crear/user-crear.component';
import { RolGuard } from './guard/rol.guard';
import { LoginGuard } from './guard/login.guard';
import { EstadoGuard } from './guard/estado.guard';
import { ValidacionComponent } from './validacion/validacion.component';
import { RouterModule } from '@angular/router';
import { UsuarioComponent } from './user/user.component';
import { UsuariosEditarComponent } from './user-editar/user-editar.component';

import { AuthInterceptor } from './auth.interceptor';
import { ErrorPageComponent } from './error-page/error-page.component';
//import { GameBoardComponent } from './game-board/game-board.component';
import { SensorComponent } from './sensor/sensor.component';
import { SensorCrearComponent } from './sensor-crear/sensor-crear.component';
import { SensorEditarComponent } from './sensor-editar/sensor-editar.component';
import { DatosComponent } from './datos/datos.component';
import { SalonComponent } from './salon/salon.component';
import { SalonCrearComponent } from './salon-crear/salon-crear.component';
import { SalonEditarComponent } from './salon-editar/salon-editar.component';






const config: SocketIoConfig = { url: 'http://127.0.0.1:3333', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterCrearComponent,
    UserCrearComponent,
    ValidacionComponent,
    UsuarioComponent,
    UsuariosEditarComponent,
    ErrorPageComponent,
    SensorComponent,
    SensorCrearComponent,
    SensorEditarComponent,
    DatosComponent,
    SalonComponent,
    SalonCrearComponent,
    SalonEditarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    NgbModalModule,

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, CookieService, RolGuard, LoginGuard, EstadoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
