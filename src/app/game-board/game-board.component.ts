import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-game-board',
templateUrl: './game-board.component.html',
styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit{
boatPosition = 0;
intervalSubscription: Subscription | undefined;

constructor(private route: ActivatedRoute) { }

ngOnInit() {
    const stream = new EventSource('http://127.0.0.1:3333/stream');
    stream.addEventListener('message', (event) => {
      if(event.data){
        if(localStorage.getItem("turno") == event.data){
          this.startMoving();
        }
      }
      else{
        console.log("error")
      }})
  }

  startMoving() {
    this.boatPosition = 0;
    this.intervalSubscription = interval(100).subscribe(() => {
      if (this.boatPosition >= 100) {
        if (this.intervalSubscription) {
            this.intervalSubscription.unsubscribe();
          }
      } else {
        this.boatPosition += 1;
      }
    });
  }

  ngOnDestroy() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }
}