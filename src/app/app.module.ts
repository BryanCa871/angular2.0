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
<<<<<<< HEAD
import { AlumnoCrear2Component } from './alumno-crear2/alumno-crear.component';
import { AlumnoEditar2Component } from './alumno-editar2/alumno-editar.component';
import { BarcoComponent } from './barco/barco.component';
//import { GameBoardComponent } from './game-board/game-board.component';
import { ListaPartidasComponent } from './lista-partidas/lista-partidas.component';
import { PartidaCrearComponent } from './partida-crear/partida-crear.component';
=======
import { GameBoardComponent } from './game-board/game-board.component';
import { ListaPartidasComponent } from './lista-partidas/lista-partidas.component';
>>>>>>> e0d17c6fb64d4bb93d0fc87c5fcee6351331e1ff
import { PlayerComponent } from './player/player/player.component';
import { BoardComponent } from './board/board/board.component';
import { PlayerBoardComponent } from './playerBoard/player-board/player-board.component';
import { SensorComponent } from './sensor/sensor.component';
import { SensorCrearComponent } from './sensor-crear/sensor-crear.component';
import { SensorEditarComponent } from './sensor-editar/sensor-editar.component';
import { DatosComponent } from './datos/datos.component';
import { SalonComponent } from './salon/salon.component';
import { SalonCrearComponent } from './salon-crear/salon-crear.component';


<<<<<<< HEAD




=======
>>>>>>> e0d17c6fb64d4bb93d0fc87c5fcee6351331e1ff
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
<<<<<<< HEAD
    AlumnoCrear2Component,
    AlumnoEditar2Component,
    BarcoComponent,
//    GameBoardComponent,
    ListaPartidasComponent,
    PartidaCrearComponent,
    PlayerComponent,
    BoardComponent,
    PlayerBoardComponent,
    
=======
    GameBoardComponent,
    ListaPartidasComponent,
    PlayerComponent,
    BoardComponent,
    PlayerBoardComponent,
    SensorComponent,
    SensorCrearComponent,
    SensorEditarComponent,
    DatosComponent,
    SalonComponent,
    SalonCrearComponent,
>>>>>>> e0d17c6fb64d4bb93d0fc87c5fcee6351331e1ff
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    SocketIoModule.forRoot(config),
    NgbModalModule,

=======
    SocketIoModule.forRoot(config)
>>>>>>> e0d17c6fb64d4bb93d0fc87c5fcee6351331e1ff
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, CookieService, RolGuard, LoginGuard, EstadoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
