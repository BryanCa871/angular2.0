import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../user-table.service';
import { Rol } from '../rol';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-users-editar',
  templateUrl: './user-editar.component.html',
  styleUrls: ['./user-editar.component.css']
})
export class UsuariosEditarComponent {
  id!: number;
  usuario: Usuario = new Usuario();
  usuarioForm!: FormGroup;
  roles:Rol[]=[];

  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService, private fb: FormBuilder,
    private rolService:RolService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.usuarioForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[a-zA-Z\s]*$/)]],
    active: ['', [Validators.required]],
    rol_id: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.maxLength(65), Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
    });

    this.rolService.read().subscribe(
      response => {
        this.roles = response.Data;
      },
      error => {
        console.log(error);
      }
    );

    this.usuarioService.getById(this.id).subscribe((data: Usuario) => {
      this.usuario = data; // asignamos los datos del cliente recuperado a la propiedad cliente
      this.usuarioForm.patchValue(data); // actualizamos los valores del formulario con los datos recuperados
    });

    
  }

  updateUsuario(): void {
    this.usuarioService.update(this.id, this.usuarioForm.value)
      .subscribe(data => {
        console.log(this.usuarioForm);
        this.usuario = new Usuario();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.updateUsuario();
  }

  gotoList(): void {
    this.router.navigate(['/usuarios']);
  }

  cancel() {
    this.router.navigate(['/usuarios']);
  }
}
