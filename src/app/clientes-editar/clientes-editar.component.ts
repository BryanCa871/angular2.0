import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../interface/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-clientes-editar',
  templateUrl: './clientes-editar.component.html',
  styleUrls: ['./clientes-editar.component.css']
})
export class ClientesEditarComponent {
  id!: number;
  cliente: Cliente = new Cliente();
  clienteForm!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private clienteService: ClienteService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.clienteForm = this.fb.group({
      Nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[a-zA-Z\s]*$/)]],
    Ap_paterno: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z\s]*$/)]],
    Ap_materno: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z\s]*$/)]],
    Correo: ['', [Validators.required, Validators.maxLength(65), Validators.email]],
    Numero: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
    });

    this.clienteService.getById(this.id).subscribe((data: Cliente) => {
      this.cliente = data; // asignamos los datos del cliente recuperado a la propiedad cliente
      this.clienteForm.patchValue(data); // actualizamos los valores del formulario con los datos recuperados
    });
  }

  updateCliente(): void {
    this.clienteService.update(this.id, this.clienteForm.value)
      .subscribe(data => {
        console.log(this.clienteForm);
        this.cliente = new Cliente();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.updateCliente();
  }

  gotoList(): void {
    this.router.navigate(['/cliente']);
  }
}
