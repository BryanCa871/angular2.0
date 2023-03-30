import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolGuard } from './guard/rol.guard';
import { AlumnoComponent } from './alumno/alumno.component';
import { AlumnoCrearComponent } from './alumno-crear/alumno-crear.component';
import { AlumnoEditarComponent } from './alumno-editar/alumno-editar.component';
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
import { LoginGuard } from './guard/login.guard';
import { EstadoGuard } from './guard/estado.guard';
import { ValidacionComponent } from './validacion/validacion.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesCrearComponent } from './clientes-crear/clientes-crear.component';
import { ClientesEditarComponent } from './clientes-editar/clientes-editar.component';
import { ProvedoresComponent } from './provedores/provedores.component';
import { ProvedoresCrearComponent } from './provedores-crear/provedores-crear.component';
import { ProvedoresEditarComponent } from './provedores-editar/provedores-editar.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosCrearComponent } from './productos-crear/productos-crear.component';
import { ProductosEditarComponent } from './productos-editar/productos-editar.component';
import { ComprasComponent } from './compras/compras.component';
import { ComprasCrearComponent } from './compras-crear/compras-crear.component';
import { ComprasEditarComponent } from './compras-editar/compras-editar.component';
import { UsuarioComponent } from './user/user.component';
import { UsuariosEditarComponent } from './user-editar/user-editar.component';
import { Alumno2Component } from './alumno2/alumno2.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AlumnoCrear2Component } from './alumno-crear2/alumno-crear.component';
import { AlumnoEditar2Component } from './alumno-editar2/alumno-editar.component';
import { BarcoComponent } from './barco/barco.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { ListaPartidasComponent } from './lista-partidas/lista-partidas.component';
import { PartidaCrearComponent } from './partida-crear/partida-crear.component';
import { PlayerBoardComponent } from './playerBoard/player-board/player-board.component';

const routes: Routes = [
  {path: 'polling', component: AlumnoComponent, canActivate: [ LoginGuard], data: {roles: [1,2,3]}},
  {path: 'alumnos/crear', component: AlumnoCrearComponent, canActivate: [LoginGuard], data: {roles: [1,2,3]}},
  {path: 'alumnos/:id/edit', component: AlumnoEditarComponent, canActivate: [LoginGuard]},
  {path: 'eventsource', component: Alumno2Component, canActivate: [LoginGuard], data: {roles: [1,2,3]}},
  {path: 'eventsource/crear', component: AlumnoCrear2Component, canActivate: [LoginGuard], data: {roles: [1,2,3]}},
  {path: 'eventsource/:id/edit', component: AlumnoEditar2Component, canActivate: [LoginGuard]},
  {path: 'editorial', component: EditorialComponent, canActivate: [LoginGuard], data: {roles: [1,3]}},
  {path: 'editoriales/crear', component: EditorialCrearComponent, canActivate: [LoginGuard], data: {roles: [1]}},
  {path: 'editoriales/UP/:id', component: EditorialEditarComponent, canActivate: [LoginGuard], data: {roles: [1]}},
  {path: 'autor', component: AutorComponent, canActivate: [LoginGuard], data: {roles: [1,3]}},
  {path: 'autores/crear', component: AutorCrearComponent, canActivate: [LoginGuard], data: {roles: [1]}},
  {path: 'autores/UP/:id', component: AutorEditarComponent, canActivate: [LoginGuard], data: {roles: [1]}},
  {path: 'pais', component: PaisComponent, canActivate: [LoginGuard], data: {roles: [1,3]}},
  {path: 'paises/crear', component: PaisCrearComponent, canActivate: [LoginGuard], data: {roles: [1]}},
  {path: 'paises/UP/:id', component: PaisEditarComponent, canActivate: [LoginGuard], data: {roles: [1]}},
  {path: 'libro', component: LibroComponent, canActivate: [LoginGuard], data: {roles: [1,3]}},
  {path: 'libros/crear', component: LibroCrearComponent, canActivate: [LoginGuard], data: {roles: [1]}},
  {path: 'libros/UP/:id', component: LibroEditarComponent, canActivate: [LoginGuard], data: {roles: [1]}},

  {path: 'empleado', component: EmpleadoComponent, canActivate: [LoginGuard], data: {roles: [1,2]}},
  {path: 'empleado/crear', component: EmpleadoCrearComponent, canActivate: [LoginGuard], data: {roles: [1]}},
  {path: 'empleado/:id', component: EmpleadoEditarComponent, canActivate: [LoginGuard], data: {roles: [1]}},
  {path: 'cliente', component: ClientesComponent, canActivate: [LoginGuard], data: {roles: [1,2]}},
  {path: 'cliente/crear', component: ClientesCrearComponent, canActivate: [LoginGuard], data: {roles: [1]}},
  {path: 'cliente/:id', component: ClientesEditarComponent, canActivate: [LoginGuard], data: {roles: [1]}},
  {path: 'provedor', component: ProvedoresComponent, canActivate: [LoginGuard], data: {roles: [1,2]}},
  {path: 'provedor/crear', component: ProvedoresCrearComponent, canActivate: [LoginGuard], data: {roles: [1]}},
  {path: 'provedor/:id', component: ProvedoresEditarComponent, canActivate: [LoginGuard], data: {roles: [1]}},
  {path: 'producto', component: ProductosComponent, canActivate: [LoginGuard], data: {roles: [1,2]}},
  {path: 'producto/crear', component: ProductosCrearComponent, canActivate: [LoginGuard], data: {roles: [1]}},
  {path: 'producto/:id', component: ProductosEditarComponent, canActivate: [LoginGuard], data: {roles: [1]}},
  {path: 'compra', component: ComprasComponent, canActivate: [LoginGuard], data: {roles: [1,2]}},
  {path: 'compra/crear', component: ComprasCrearComponent, canActivate: [LoginGuard], data: {roles: [1]}},
  {path: 'compra/:id', component: ComprasEditarComponent, canActivate: [LoginGuard], data: {roles: [1]}},

  {path: 'login', component:UserCrearComponent},
  {path: 'registrar', component:RegisterCrearComponent},
  {path: 'validacion', component:ValidacionComponent},

  {path: 'usuarios/:id', component:UsuariosEditarComponent,canActivate: [LoginGuard], data: {roles: [1]}},
  {path: 'usuarios', component:UsuarioComponent,canActivate: [LoginGuard], data: {roles: [1]}},

  {path: 'error', component:ErrorPageComponent},

  {path: 'barco', component:BarcoComponent},
  {path: 'game', component:GameBoardComponent},
  {path: 'lista', component:ListaPartidasComponent},
  {path: 'partida/crear', component:PartidaCrearComponent},
  {path: 'battleship', component:PlayerBoardComponent}






  



  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
