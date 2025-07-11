import { Component } from '@angular/core';
import { CrearTarjeta } from './components/crear-tarjeta/crear-tarjeta';
import { ListarTarjeta } from './components/listar-tarjeta/listar-tarjeta';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  imports: [
    CrearTarjeta,
    ListarTarjeta,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'TarjetaCredito';
}
