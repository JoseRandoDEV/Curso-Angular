import { Component } from '@angular/core';
import { CrearTarjeta } from "./components/crear-tarjeta/crear-tarjeta";
import { ListarTarjeta } from "./components/listar-tarjeta/listar-tarjeta";

@Component({
  selector: 'app-root',
  imports: [CrearTarjeta, ListarTarjeta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = ('TarjetaCredito');
}
