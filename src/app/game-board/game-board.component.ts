import { Component, OnInit } from '@angular/core';

class Ship {
  length: number;
  position: string[];
  hits: boolean[];

  constructor(length: number, position: string[]) {
    this.length = length;
    this.position = position;
    this.hits = Array(length).fill(false);
  }

  isSunk(): boolean {
    return this.hits.every((hit) => hit === true);
  }
}

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
    hits = [];
  misses = [];
  grid: string[][] = [];
  ships: Ship[] = [];
  player: number = 1;
  turns: number = 0;
  gameOver: boolean = false;
  winner: number = 0;

  ngOnInit(): void {
    this.createGrid();
    this.placeShips();
  }

  createGrid(): void {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const cols = ['1', '2', '3', '4', '5', '6', '7', '8'];

    for (let row of rows) {
      const rowArray = [];
      for (let col of cols) {
        rowArray.push(`${row}${col}`);
      }
      this.grid.push(rowArray);
    }
  }

  placeShips(): void {
    for (let i = 0; i < 30; i++) {
      const length = Math.floor(Math.random() * 3) + 2;
      const row = Math.floor(Math.random() * 8);
      const col = Math.floor(Math.random() * 8);
      const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';

      const position = [];
      for (let j = 0; j < length; j++) {
        if (orientation === 'horizontal') {
          position.push(`${String.fromCharCode(65 + row)}${+col+j+1}`);
        } else {
          position.push(`${String.fromCharCode(65 + row + j)}${+col+1}`);
        }
      }

      this.ships.push(new Ship(length, position));
    }
  }

  attack(coord: string): void {
    if (this.gameOver) return;

    const row = coord.charCodeAt(0) - 65;
    const col = +coord[1] - 1;

    const hit = this.ships.some((ship) => {
      const index = ship.position.indexOf(coord);
      if (index !== -1) {
        ship.hits[index] = true;
        return true;
      } else {
        return false;
      }
    });

    if (hit) {
      console.log(`Player ${this.player} hit a ship at ${coord}!`);
    } else {
      console.log(`Player ${this.player} missed at ${coord}.`);
    }

    this.turns++;

    if (this.ships.every((ship) => ship.isSunk())) {
      this.gameOver = true;
      this.winner = this.player;
      console.log(`Player ${this.player} wins!`);
    } else {
      this.player = this.player === 1 ? 2 : 1;
    }
  }

  private getRandomPosition(): string {
    const letters: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const row: string = letters[Math.floor(Math.random() * letters.length)];
    const col: string = (Math.floor(Math.random() * 8) + 1).toString();
    return row + col;
  }

}
