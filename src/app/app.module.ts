import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { slideInAnimation } from './animacion/route-animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { CommonModule } from '@angular/common';

import { AlumnoService } from './alumno.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnoCrearComponent, AlumnoCrearComponent as crear } from './alumno-crear/alumno-crear.component';
import { AlumnoEditarComponent } from './alumno-editar/alumno-editar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditorialComponent } from './editorial/editorial.component';
import { EditorialCrearComponent } from './editorial-crear/editorial-crear.component';
import { EditorialEditarComponent } from './editorial-editar/editorial-editar.component';
import { AutorComponent } from './autor/autor.component';
import { AutorCrearComponent } from './autor-crear/autor-crear.component';
import { AutorEditarComponent } from './autor-editar/autor-editar.component';
import { PaisComponent } from './pais/pais.component';
import { PaisCrearComponent } from './pais-crear/pais-crear.component';
import { PaisEditarComponent } from './pais-editar/pais-editar.component';
import { LibroComponent } from './libro/libro.component';
import { LibroCrearComponent } from './libro-crear/libro-crear.component';
import { LibroEditarComponent } from './libro-editar/libro-editar.component';
import { RegisterCrearComponent } from './register-crear/register-crear.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { UserCrearComponent } from './user-crear/user-crear.component';
import { EmpleadoCrearComponent } from './empleado-crear/empleado-crear.component';
import { EmpleadoEditarComponent } from './empleado-editar/empleado-editar.component';
import { RolGuard } from './guard/rol.guard';
import { LoginGuard } from './guard/login.guard';
import { EstadoGuard } from './guard/estado.guard';
import { ValidacionComponent } from './validacion/validacion.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProvedoresComponent } from './provedores/provedores.component';
import { ProductosComponent } from './productos/productos.component';
import { ComprasComponent } from './compras/compras.component';
import { ClientesCrearComponent } from './clientes-crear/clientes-crear.component';
import { ClientesEditarComponent } from './clientes-editar/clientes-editar.component';
import { ProvedoresCrearComponent } from './provedores-crear/provedores-crear.component';
import { ProvedoresEditarComponent } from './provedores-editar/provedores-editar.component';
import { ProductosCrearComponent } from './productos-crear/productos-crear.component';
import { ProductosEditarComponent } from './productos-editar/productos-editar.component';
import { ComprasCrearComponent } from './compras-crear/compras-crear.component';
import { ComprasEditarComponent } from './compras-editar/compras-editar.component';
import { RouterModule } from '@angular/router';
import { ClienteService } from './service/cliente.service';
import { UsuarioComponent } from './user/user.component';
import { UsuariosEditarComponent } from './user-editar/user-editar.component';

import { AuthInterceptor } from './auth.interceptor';
import { Alumno2Component } from './alumno2/alumno2.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AlumnoCrear2Component } from './alumno-crear2/alumno-crear.component';
import { AlumnoEditar2Component } from './alumno-editar2/alumno-editar.component';
import { BarcoComponent } from './barco/barco.component';
//import { GameBoardComponent } from './game-board/game-board.component';
import { ListaPartidasComponent } from './lista-partidas/lista-partidas.component';
import { PartidaCrearComponent } from './partida-crear/partida-crear.component';
import { PlayerComponent } from './player/player/player.component';
import { BoardComponent } from './board/board/board.component';
import { PlayerBoardComponent } from './playerBoard/player-board/player-board.component';






const config: SocketIoConfig = { url: 'http://127.0.0.1:3333', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    crear,
    AlumnoEditarComponent,
    NavbarComponent,
    EditorialComponent,
    EditorialCrearComponent,
    EditorialEditarComponent,
    AutorComponent,
    AutorCrearComponent,
    AutorEditarComponent,
    PaisComponent,
    PaisCrearComponent,
    PaisEditarComponent,
    LibroComponent,
    LibroCrearComponent,
    LibroEditarComponent,
    RegisterCrearComponent,
    EmpleadoComponent,
    UserCrearComponent,
    EmpleadoCrearComponent,
    EmpleadoEditarComponent,
    ValidacionComponent,
    ClientesComponent,
    ProvedoresComponent,
    ProductosComponent,
    ComprasComponent,
    ClientesCrearComponent,
    ClientesEditarComponent,
    ProvedoresCrearComponent,
    ProvedoresEditarComponent,
    ProductosCrearComponent,
    ProductosEditarComponent,
    ComprasCrearComponent,
    ComprasEditarComponent,
    UsuarioComponent,
    UsuariosEditarComponent,
    Alumno2Component,
    ErrorPageComponent,
    AlumnoCrear2Component,
    AlumnoEditar2Component,
    BarcoComponent,
//    GameBoardComponent,
    ListaPartidasComponent,
    PartidaCrearComponent,
    PlayerComponent,
    BoardComponent,
    PlayerBoardComponent,
    
    
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
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AlumnoService, CookieService, RolGuard, LoginGuard, EstadoGuard,ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
