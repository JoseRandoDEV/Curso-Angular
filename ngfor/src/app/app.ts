import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  listadoDeEstudiantes: any = [] = [
    { nombre: 'Juan', estado: 'Promocionado' },
    { nombre: 'Ana', estado: 'Regular' },
    { nombre: 'Luis', estado: 'Regular' },
    { nombre: 'María', estado: 'Recursante' },  /*Si comento el array aparece el msj de no hay registros*/
  ]
  mostar: boolean = true;
  mostrarNoMostrar() {
    this.mostar = !this.mostar;
  }
}
