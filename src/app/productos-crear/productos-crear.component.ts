import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from '../interface/producto';
import { Provedor } from '../interface/provedor';
import { ProductoService } from '../service/producto.service';
import { ProvedorService } from '../service/provedor.service';

@Component({
  selector: 'app-productos-crear',
  templateUrl: './productos-crear.component.html',
  styleUrls: ['./productos-crear.component.css']
})
export class ProductosCrearComponent implements OnInit{
  productoForm: FormGroup;
  producto: Producto = new Producto();
  provedores:Provedor[]=[];
  provedoresActivos:Provedor[]=[];
  productos: Producto[]=[];

  constructor(private productoService: ProductoService, private fb: FormBuilder, private router: Router
    , private provedorService: ProvedorService) {
    this.productoForm = this.fb.group({
      Nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z\s]*$/)]],
      Stock: ['', [Validators.required,Validators.pattern(/^[0-9]*$/),Validators.minLength(1), Validators.maxLength(5),]],
      Precio: ['', [Validators.required,Validators.pattern(/^[0-9]*$/),Validators.minLength(1), Validators.maxLength(5)]],
      Marca: ['', Validators.required],
    });
   }

   ngOnInit(): void {

    this.provedorService.read().subscribe(
      response => {
        this.provedores = response.Data;
      },
      error => {
        console.log(error);
      }
    );
  }

  createProducto(): void {
    this.productoService.create(this.productoForm.value).subscribe(
      (response) => {
        console.log(this.productoForm.value);
        this.router.navigate(['/producto']);
      },
      (error) => console.log(Response)
    );
  }

}
