import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../user-table.service';
import { trigger, style, transition, animate,state } from '@angular/animations';

@Component({
  selector: 'app-clientes',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations:[
    trigger('enterState',[
      state('void',style({
        transform:'translateX(-100%)',
        opacity:0
      })),
      transition(':enter',[
        animate(800,style({
          transform:'translateX(0)',
          opacity:1
        }))
      ])
    ])
  ]
  
})
export class UsuarioComponent {
  usuarios: Usuario[] = [];
  currentUsuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  this.read();
  }

  read(): void {
  this.usuarioService.read().subscribe(response => this.usuarios = response.Data);
  }

  deleteUser(user: any) {
  this.usuarioService.delete(user.id).subscribe(
    response => {
      console.log(response);
      this.read();
    },
    error => {
      console.log(error);
    });
  }

  editUser(user: any) {
  this.currentUsuario = user;
  }
}
