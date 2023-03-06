import { Component } from '@angular/core';
import { Provedor } from '../interface/provedor';
import { ProvedorService } from '../service/provedor.service';
import { trigger, style, transition, animate,state } from '@angular/animations';


@Component({
  selector: 'app-provedores',
  templateUrl: './provedores.component.html',
  styleUrls: ['./provedores.component.css'],
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
export class ProvedoresComponent {
  provedores: Provedor[] = [];
  currentProvedor: Provedor = new Provedor();

  constructor(private provedorService: ProvedorService) { }

  ngOnInit() {
    this.read();
  }

  read(): void {
    this.provedorService.read()
      .subscribe(response => this.provedores = response.Data);
  }

 

  deleteUser(user: any) {
    this.provedorService.delete(user.id).subscribe(
      response => {
        console.log(response);
        this.read();
      },
      error => {
        console.log(error);
      });
  }

  editUser(user: any) {
    this.currentProvedor = user;
  }
}
