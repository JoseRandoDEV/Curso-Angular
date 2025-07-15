import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TarjetaCredito } from '../../models/tarjeta';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { initializeApp } from '@angular/fire/app';
import { getAnalytics } from '@angular/fire/analytics';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-crear-tarjeta',
  imports: [
    ReactiveFormsModule,
    AngularFireModule,
    AngularFirestoreModule
  ],
  templateUrl: './crear-tarjeta.html',
  styleUrl: './crear-tarjeta.css'
})
export class CrearTarjeta implements OnInit {

  forms: FormGroup;

  constructor(private fb: FormBuilder) {

    this.forms = this.fb.group({
      titular: ['', Validators.required],
      nroTarjeta: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    })
  }

  ngOnInit(): void {
  }

  crearTarjeta() {
    console.log(this.forms)

    const TARJETA: TarjetaCredito = {
      titular: this.forms.value.titular,
      numDeTarjeta: this.forms.value.numDeTarjeta,
      cvv: this.forms.value.cvv,
      fechaActualizacion: new Date(),
      fechaCreacion: new Date(),
      fechaExpiracion: this.forms.value.fechaExpiracion
    }
    console.log(TARJETA)
  }

}
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);