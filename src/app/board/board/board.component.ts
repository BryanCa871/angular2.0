import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  @Input() rows: number[] = [];
  @Input() cols: string[] = [];
  board: number[][] = [];
  hits: {[key: string]: boolean} = {};
  misses: {[key: string]: boolean} = {};
  selectedCells: {[key: string]: boolean} = {};
  selectedImage = 'assets/tacha.png'; // ruta a la imagen que desea mostrar

  ngOnInit(): void {
    this.placeRandomShips();
  }

  onClick(row: number, col: string) {
    this.hits[row + col] = true;
    this.misses[row + col] = true;
    this.selectedCells[row + col] = true;
  }

  placeRandomShips() {
    let numShips = 30;
    while (numShips > 0) {
      let row = Math.floor(Math.random() * this.rows.length);
      let col = Math.floor(Math.random() * this.cols.length);
      if (this.board[row][col] === 0) {
        this.board[row][col] = 1;
        numShips--;
      }
    }
  }
}
