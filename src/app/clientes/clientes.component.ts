import { Component } from '@angular/core';
import { Cliente } from '../interface/cliente';
import { ClienteService } from '../service/cliente.service';
import { trigger, style, transition, animate,state } from '@angular/animations';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
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
export class ClientesComponent {
  clientes: Cliente[] = [];
  currentCliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  this.read();
  }

  read(): void {
  this.clienteService.read().subscribe(response => this.clientes = response.Data);
  }

  deleteUser(user: any) {
  this.clienteService.delete(user.id).subscribe(
    response => {
      console.log(response);
      this.read();
    },
    error => {
      console.log(error);
    });
  }

  editUser(user: any) {
  this.currentCliente = user;
  }
}
