import { Component, OnInit } from '@angular/core';
import { Editorial } from '../editorial';
import { EditorialService } from '../editoriales.service';
import { trigger, style, transition, animate,state } from '@angular/animations';



@Component({
  selector: 'app-alumno',
  styleUrls: ['./editorial.component.css'],
  templateUrl: './editorial.component.html',
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
export class EditorialComponent implements OnInit {
  editoriales: Editorial[] = [];
  currentEditorial: Editorial = new Editorial();

  constructor(private editorialService: EditorialService) { }

  ngOnInit() {
    this.read();
  }

  read(): void {
    this.editorialService.read()
      .subscribe(editoriales => this.editoriales = editoriales);
  }

 

  deleteUser(user: any) {
    this.editorialService.delete(user.id).subscribe(
      response => {
        console.log(response);
        this.read();
      },
      error => {
        console.log(error);
      });
  }

  editUser(user: any) {
    this.currentEditorial = user;
  }
}


