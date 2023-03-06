import { Component, OnInit } from '@angular/core';
import { Pais } from '../pais';
import { PaisService } from '../pais.service';
import { trigger, style, transition, animate,state } from '@angular/animations';


@Component({
  selector: 'app-pais',
  styleUrls: ['./pais.component.css'],
  templateUrl: './pais.component.html',
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
export class PaisComponent implements OnInit {
  paises: Pais[] = [];
  currentPais: Pais = new Pais();

  constructor(private paisService: PaisService) { }

  ngOnInit() {
    this.read();
  }

  read(): void {
    this.paisService.read()
      .subscribe(paises => this.paises = paises);
  }

 

  deleteUser(user: any) {
    this.paisService.delete(user.id).subscribe(
      response => {
        console.log(response);
        this.read();
      },
      error => {
        console.log(error);
      });
  }

  editUser(user: any) {
    this.currentPais = user;
  }
}
