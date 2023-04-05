import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  board: any[][];
  ships: any[];

  constructor() {
    // Inicializar el tablero y los barcos
    this.board = [[]];
    this.ships = [];
  }

  placeShip(row: number, col: string) {
    // Implementar la lógica para colocar un barco en la posición seleccionada
    // Actualizar el tablero y los barcos
  }

  shoot(row: number, col: string) {
    // Implementar la lógica para disparar en la posición seleccionada
    // Verificar si se ha hundido un barco y actualizar el tablero y los barcos
    // Retornar true si se ha hundido un barco, false en caso contrario
  }


  initialPosition = 'left';
  generatePosition(): string {
    const positions = ['left', 'right'];
    return positions[Math.floor(Math.random() * positions.length)];
  }

  startGame(initialPosition: string) {
    this.initialPosition = initialPosition;
  }

  getInitialPosition() {
    return this.initialPosition;
  }

}
