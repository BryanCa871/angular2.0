import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../interface/producto';
import { Provedor } from '../interface/provedor';
import { ProductoService } from '../service/producto.service';
import { ProvedorService } from '../service/provedor.service';

@Component({
  selector: 'app-productos-editar',
  templateUrl: './productos-editar.component.html',
  styleUrls: ['./productos-editar.component.css']
})
export class ProductosEditarComponent {
  id!: number;
  producto: Producto = new Producto();
 productoForm!: FormGroup;
 provedores:Provedor[]=[];

  constructor(private route: ActivatedRoute, private router: Router, private productoService: ProductoService, private fb: FormBuilder,
    private provedorService:ProvedorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.productoForm = this.fb.group({
      Nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z\s]*$/)]],
      Stock: ['', [Validators.required,Validators.pattern(/^[0-9]*$/),Validators.minLength(1), Validators.maxLength(5),]],
      Precio: ['', [Validators.required,Validators.pattern(/^[0-9]*$/),Validators.minLength(1), Validators.maxLength(5)]],
      Marca: ['', Validators.required],

    });

    this.provedorService.read().subscribe(
      response => {
        this.provedores = response.Data;
      },
      error => {
        console.log(error);
      }
    );

    this.productoService.getById(this.id).subscribe((data: Producto) => {
      this.producto = data; // asignamos los datos del alumno recuperado a la propiedad alumno
      this.productoForm.patchValue(data); // actualizamos los valores del formulario con los datos recuperados
    });
  }

  updateProducto(): void {
    this.productoService.update(this.id, this.productoForm.value)
      .subscribe(data => {
        console.log(this.productoForm);
        this.producto = new Producto();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.updateProducto();
  }

  gotoList(): void {
    this.router.navigate(['/producto']);
  }
}
