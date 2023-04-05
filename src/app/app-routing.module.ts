import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolGuard } from './guard/rol.guard';
import { RegisterCrearComponent } from './register-crear/register-crear.component';
import { UserCrearComponent } from './user-crear/user-crear.component';
import { LoginGuard } from './guard/login.guard';
import { EstadoGuard } from './guard/estado.guard';
import { ValidacionComponent } from './validacion/validacion.component';
import { UsuarioComponent } from './user/user.component';
import { UsuariosEditarComponent } from './user-editar/user-editar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { ListaPartidasComponent } from './lista-partidas/lista-partidas.component';
import { PlayerBoardComponent } from './playerBoard/player-board/player-board.component';
import { FormComponent } from './seleccionar-ventana/seleccionar-ventana.component';

/////////////////////////////////////////////////////////////////////////////////////////////////
import { SensorComponent } from './sensor/sensor.component';
import { SensorCrearComponent } from './sensor-crear/sensor-crear.component';
import { SensorEditarComponent } from './sensor-editar/sensor-editar.component';
import { DatosComponent } from './datos/datos.component';
import { SalonComponent } from './salon/salon.component';
import { SalonCrearComponent } from './salon-crear/salon-crear.component';

const routes: Routes = [

  {path: 'login', component:UserCrearComponent},
  {path: 'registrar', component:RegisterCrearComponent},
  {path: 'validacion', component:ValidacionComponent},

  {path: 'usuarios/:id', component:UsuariosEditarComponent,canActivate: [LoginGuard], data: {roles: [1]}},
  {path: 'usuarios', component:UsuarioComponent,canActivate: [LoginGuard], data: {roles: [1]}},

  {path: 'error', component:ErrorPageComponent},

  {path: 'game', component:GameBoardComponent},
  {path: 'lista', component:ListaPartidasComponent},
  {path: 'battleship', component:PlayerBoardComponent},
  {path: 'seleccionar', component:FormComponent},
  {path: 'game?position=right', component:GameBoardComponent},

  /////////////////////////////////////////////////////////
  {path: 'sensor', component:SensorComponent},
  {path: 'sensores/crear', component:SensorCrearComponent},
  {path: 'sensores/UP/:id', component:SensorEditarComponent},
  {path: 'sensores/:id', component:DatosComponent},
  {path: 'salon', component:SalonComponent},
  {path: 'salones/crear', component:SalonCrearComponent},








  



  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
