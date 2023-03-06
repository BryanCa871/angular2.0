import { Component, OnInit } from '@angular/core';
import { Producto } from '../interface/producto';
import { ProductoService } from '../service/producto.service';
import { trigger, style, transition, animate,state } from '@angular/animations';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
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
export class ProductosComponent implements OnInit{
  productos: Producto[] = [];
  currentProducto: Producto = new Producto();

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.read();
  }

  read(): void {
    this.productoService.read()
      .subscribe(response =>this.productos = response.Data);
  }

 

  deleteUser(user: any) {
    this.productoService.delete(user.id).subscribe(
      response => {
        console.log(response);
        this.read();
      },
      error => {
        console.log(error);
      });
  }

  editUser(user: any) {
    this.currentProducto = user;
  }
}
