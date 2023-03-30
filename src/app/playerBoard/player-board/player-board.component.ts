import { Component } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-player-board',
  templateUrl: './player-board.component.html',
  styleUrls: ['./player-board.component.css']
})
export class PlayerBoardComponent {
  rows = [1, 2, 3, 4, 5, 6, 7, 8];
  cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  constructor(private gameService: GameService) {}

  placeShip(row: number, col: string) {
    // Implementar la lógica para colocar un barco
    this.gameService.placeShip(row, col);
  }
}
