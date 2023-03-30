import { Component, OnInit } from '@angular/core';
import { Partida } from '../partida';
import { PartidaService } from '../partida.service';
import { trigger, style, transition, animate,state } from '@angular/animations';


@Component({
  selector: 'app-lista-partidas',
  templateUrl: './lista-partidas.component.html',
  styleUrls: ['./lista-partidas.component.css'],
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
export class ListaPartidasComponent implements OnInit {
  partidas: Partida[] = [];
  currentPartida: Partida = new Partida();

  constructor(private partidaService: PartidaService) { }

  ngOnInit() {
    this.read();
  }

  read(): void {
    this.partidaService.read()
      .subscribe(response => this.partidas = response.Data);
  }

 

  deleteUser(user: any) {
    this.partidaService.delete(user.id).subscribe(
      response => {
        console.log(response);
        this.read();
      },
      error => {
        console.log(error);
      });
  }

  editUser(user: any) {
    this.currentPartida = user;
  }
}
