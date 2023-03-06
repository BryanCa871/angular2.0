import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Cliente } from '../interface/cliente';
import { Compra } from '../interface/compra';
import { Producto } from '../interface/producto';
import { ClienteService } from '../service/cliente.service';
import { CompraService } from '../service/compra.service';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-compras-crear',
  templateUrl: './compras-crear.component.html',
  styleUrls: ['./compras-crear.component.css']
})
export class ComprasCrearComponent {
  compraForm: FormGroup;
  compra: Compra = new Compra();
  clientes: Cliente[]=[];
  productos: Producto[]=[];
  empleados: Empleado[]=[];

  constructor(private compraService: CompraService, private fb: FormBuilder, private router: Router,
    private clienteService:ClienteService, private productoService:ProductoService,
    private empleadoService:EmpleadoService) {
    this.compraForm = this.fb.group({
      Cliente: ['', Validators.required],
      Producto: ['', Validators.required],
      Cantidad: ['', [
        Validators.required,
        Validators.pattern(/^[0-9]{1,4}$/)
      ]],
      Empleado: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    this.clienteService.read().subscribe(
      response => {
        this.clientes = response.Data;
      },
      error => {
        console.log(error);
      }
    );

    this.productoService.read().subscribe(
      response => {
        this.productos = response.Data;
      },
      error => {
        console.log(error);
      }
    );

    this.empleadoService.read().subscribe(
      response => {
        this.empleados = response.Data;
      },
      error => {
        console.log(error);
      }
    );
  }

  createCompra(): void {
    this.compraService.create(this.compraForm.value).subscribe(
      (response) => {
        console.log(this.compraForm.value);
        this.router.navigate(['/compra']);
      },
      (error) => console.log(this.compraForm.value)
    );
  }

}
