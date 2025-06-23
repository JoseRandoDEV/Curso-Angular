import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [],
})
export class App {
  nombre = 'Jose Rando';
  textPlaceholder = 'Escribe su nombre aqui...';
  deshabilitado = true;
  img = 'https://images.seeklogo.com/logo-png/33/1/angular-logo-png_seeklogo-331629.png';
  tamano = "20%";
  texto = "Este es un ejemplo de event binding";
  texto2:string = "";
  
  constructor() {
    setInterval(() => this.deshabilitado=false, 3000)
  }
  getSuma(num:number, num2: number) {
    return num + num2;
  }
  cambiarTexto(): void {
    this.texto = "El texto ha cambiado";
  }
}
