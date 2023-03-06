import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../interface/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-clientes-crear',
  templateUrl: './clientes-crear.component.html',
  styleUrls: ['./clientes-crear.component.css']
})
export class ClientesCrearComponent implements OnInit{
  clienteForm: FormGroup;
  cliente: Cliente = new Cliente();
  
  constructor(private clienteService: ClienteService, private fb: FormBuilder, private router: Router) {
  this.clienteForm = this.fb.group({
    Nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[a-zA-Z\s]*$/)]],
    Ap_paterno: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z\s]*$/)]],
    Ap_materno: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z\s]*$/)]],
    Correo: ['', [Validators.required, Validators.maxLength(65), Validators.email]],
    Telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
    });
  }
  
  ngOnInit(): void {
  }
  
  createCliente(): void {
    this.clienteService.create(this.clienteForm.value).subscribe(
      (response) => {
        console.log(this.clienteForm.value);
        this.router.navigate(['/cliente']);
      },
      (error) => console.log(Response)
    );
  }
}
