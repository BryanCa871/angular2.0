import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Partida } from '../partida';
import { PartidaService } from '../partida.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-partida-crear',
  templateUrl: './partida-crear.component.html',
  styleUrls: ['./partida-crear.component.css']
})
export class PartidaCrearComponent implements OnInit{
  partidaForm: FormGroup;
  partida: Partida = new Partida();

  constructor(private partidaService: PartidaService, private fb: FormBuilder, private router: Router) {
    this.partidaForm = this.fb.group({
      ventana1:  ['', [Validators.required, Validators.minLength(3), Validators.maxLength(60), Validators.pattern(/^[a-zA-Z0-9\s]*$/)]],
      ventana2:  ['', [Validators.required, Validators.minLength(3), Validators.maxLength(60), Validators.pattern(/^[a-zA-Z0-9\s]*$/)]],

    });
   }

  ngOnInit(): void {
  }

  createPartida(): void {
    this.partidaService.create(this.partidaForm.value).subscribe(
      (response) => {
        console.log(this.partidaForm.value);
        this.router.navigate(['/lista']);
      },
      (error) => console.log(Response)
    );
  }

  
}