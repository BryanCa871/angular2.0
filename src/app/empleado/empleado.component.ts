import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { trigger, style, transition, animate,state } from '@angular/animations';


@Component({
  selector: 'app-empleado',
  styleUrls: ['./empleado.component.css'],
  templateUrl: './empleado.component.html',
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
export class EmpleadoComponent implements OnInit {
  empleados: Empleado[] = [];
  currentEmpleado: Empleado = new Empleado();

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    this.read();
  }

  read(): void {
    this.empleadoService.read()
      .subscribe(response => this.empleados = response.Data);
  }

 

  deleteUser(user: any) {
    this.empleadoService.delete(user.id).subscribe(
      response => {
        console.log(response);
        this.read();
      },
      error => {
        console.log(error);
      });
  }

  editUser(user: any) {
    this.currentEmpleado = user;
  }
}
