import { Component } from '@angular/core';
import { Compra } from '../interface/compra';
import { CompraService } from '../service/compra.service';
import { trigger, style, transition, animate,state } from '@angular/animations';


@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css'],
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
export class ComprasComponent {
compras: Compra[] = [];
  currentCompra: Compra = new Compra();

  constructor(private compraService: CompraService) { }

  ngOnInit() {
    this.read();
  }

  read(): void {
    this.compraService.read()
      .subscribe(response => this.compras = response.Data);
  }

 

  deleteUser(user: any) {
    this.compraService.delete(user.id).subscribe(
      response => {
        console.log(response);
        this.read();
      },
      error => {
        console.log(error);
      });
  }

  editUser(user: any) {
    this.currentCompra= user;
  }
}
