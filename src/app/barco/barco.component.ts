import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-barco',
  templateUrl: './barco.component.html',
  styleUrls: ['./barco.component.css']
})
export class BarcoComponent implements OnInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private socket = io('http://127.0.0.1:3333');
  private context: CanvasRenderingContext2D = null!;
  private frameRequestId: number = 0;
  private boatImage: HTMLImageElement = new Image();
  private boatPosition: { x: number, y: number } = { x: 0, y: 0 };
  private monitorId: number = 0;

  constructor(private sock: Socket) { }

  ngOnInit(): void {
    // Connect to the server using Socket.IO
    this.socket = io('http://127.0.0.1:3333');

    // Get the monitor ID from the URL
    const urlParts = window.location.pathname.split('/');
    this.monitorId = parseInt(urlParts[urlParts.length - 1]);

    // Listen for updates to the boat position
    this.socket.on('boatPosition', (position: { x: number, y: number }) => {
      this.boatPosition = position;
    });

    // Load the boat image
    this.boatImage = new Image();
    this.boatImage.onload = () => {
      // Start the animation loop
      this.frameRequestId = requestAnimationFrame(this.draw.bind(this));
    };
    this.boatImage.src = 'assets/boat.png';
  }

  ngOnDestroy(): void {
    // Stop the animation loop when the component is destroyed
    cancelAnimationFrame(this.frameRequestId);

    // Disconnect from the server
    this.socket.disconnect();
  }

  private draw(): void {
    // Get the canvas context
    this.context = this.canvasRef.nativeElement.getContext('2d')!;

    // Clear the canvas
    this.context.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);

    // Draw the boat image at the current position
    this.context.drawImage(this.boatImage, this.boatPosition.x, this.boatPosition.y);

    // Request the next frame of the animation loop
    this.frameRequestId = requestAnimationFrame(this.draw.bind(this));
  }

  moveBoat() {
    // code to move the boat
    this.sock.emit('boat-moved', { x: 10, y: 20 });
  }

  joinGame(gameId: number) {
    this.socket.emit('join-game', { game: { id: gameId }, monitor: this.monitorId });
  }

  leaveGame(gameId: number) {
    this.socket.emit('leave-game', { game: { id: gameId } });
  }
}
