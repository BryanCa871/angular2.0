import { Component, OnInit } from '@angular/core';
import { Salon } from '../salon';
import { SalonService } from '../salon.service';
import { User } from '../user';
import { Enviromet } from 'src/enviroment';


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

  constructor(private salonService: SalonService) { }

  ngOnInit() {



    this.read();

    const stream = new EventSource(`http://${Enviromet.url}/stream`);
    stream.addEventListener('message',(event) => {
      if(event.data){
        this.read();
      }
      else{
        console.log("error")
      }
    })

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
