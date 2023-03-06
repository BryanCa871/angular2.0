import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { LibroService } from '../libro.service';
import { trigger, style, transition, animate,state } from '@angular/animations';


@Component({
  selector: 'app-libro',
  styleUrls: ['./libro.component.css'],
  templateUrl: './libro.component.html',
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
export class LibroComponent implements OnInit {
  libros: Libro[] = [];
  currentLibro: Libro = new Libro();

  constructor(private libroService: LibroService) { }

  ngOnInit() {
    this.read();
  }

  read(): void {
    this.libroService.read()
      .subscribe(libros => this.libros = libros);
  }

 

  deleteUser(user: any) {
    this.libroService.delete(user.id).subscribe(
      response => {
        console.log(response);
        this.read();
      },
      error => {
        console.log(error);
      });
  }

  editUser(user: any) {
    this.currentLibro = user;
  }
}
