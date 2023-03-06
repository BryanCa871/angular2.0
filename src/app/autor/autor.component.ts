import { Component, OnInit } from '@angular/core';
import { Autor } from '../autor';
import { AutorService } from '../autor.service';


@Component({
  selector: 'app-alumno',
  styleUrls: ['./autor.component.css'],
  templateUrl: './autor.component.html',
})
export class AutorComponent implements OnInit {
  autores: Autor[] = [];
  currentAutor: Autor = new Autor();

  constructor(private autorService: AutorService) { }

  ngOnInit() {
    this.read();
  }

  read(): void {
    this.autorService.read()
      .subscribe(autores => this.autores = autores);
  }

 

  deleteUser(user: any) {
    this.autorService.delete(user.id).subscribe(
      response => {
        console.log(response);
        this.read();
      },
      error => {
        console.log(error);
      });
  }

  editUser(user: any) {
    this.currentAutor = user;
  }
}
