import { Component, OnInit } from '@angular/core';
import { Salon } from '../salon';
import { SalonService } from '../salon.service';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {
  salones: Salon[] = [];
  currentSalon: Salon = new Salon();
  errorMsg: string = ''; // Agregar esta línea

  constructor(private salonService: SalonService) { }

  ngOnInit() {
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
