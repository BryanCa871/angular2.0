
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-seleccionar-ventana',
  templateUrl: './seleccionar-ventana.component.html',
  styleUrls: ['./seleccionar-ventana.component.css']
})
export class FormComponent {
  selectedPosition = 'left';
  intervalSubscription: Subscription | undefined;

  constructor(private router: Router) {}

  startGame() {
    this.router.navigate(['/game'], { queryParams: { position: this.selectedPosition } });
  }

  redirectToGame() {
    const position = this.selectedPosition === 'left' ? 'left' : 'right';
    this.router.navigate(['/game'], { queryParams: { position: position } });
  }

  goToGame() {
    this.router.navigateByUrl('/game?position=right');
  }

  goToGameleft() {
    this.router.navigateByUrl('/game?position=left');
  }
}
