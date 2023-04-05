import { Component, OnInit } from '@angular/core';
import { Salon } from '../salon';
import { SalonService } from '../salon.service';
import { User } from '../user';


@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {
  salones: Salon[] = [];
  currentSalon: Salon = new Salon();
  errorMsg: string = ''; // Agregar esta línea
  usuarios: User = new User();
  salonesFiltrados: Salon[] = [];

  constructor(private salonService: SalonService) { }

  ngOnInit() {
    this.salonService.obtenerUser().subscribe(
      (usuarios: User) => {
        this.usuarios = usuarios;
      },
      (error) => console.log(error)
    );


    this.salonService.read().subscribe((salones) => {
      this.salones = salones;
      this.salonesFiltrados = this.salones.filter(a => a.user.id == this.usuarios.id);
      console.log(this.salonesFiltrados);
    });



    this.read();
  }

  read(): void {
    try {
      this.salonService.read()
        .subscribe(salones => this.salones = salones);
    } catch (error) {
      this.errorMsg = 'Error al obtener los datos del servidor';
    }
  }

 

  deleteUser(user: any) {
    this.salonService.delete(user._id).subscribe(
      response => {
        console.log(response);
        this.read();
      },
      error => {
        console.log(error);
      });
  }

  editUser(user: any) {
    this.currentSalon = user;
  }
}
