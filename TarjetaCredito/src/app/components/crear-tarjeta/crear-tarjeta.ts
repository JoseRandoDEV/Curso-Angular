import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TarjetaCredito } from '../../models/tarjeta';

@Component({
  selector: 'app-crear-tarjeta',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-tarjeta.html',
  styleUrl: './crear-tarjeta.css'
})
export class CrearTarjeta {

  forms: FormGroup;

  constructor(private fb: FormBuilder) {

    this.forms = this.fb.group({
      titular: ['', Validators.required],
      nroTarjeta: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion: ['', [Validators.required, , Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, , Validators.minLength(3), Validators.maxLength(3)]],
    })
  }

  crearTarjeta() {
    console.log(this.forms);

    const TARJETA: TarjetaCredito = {
      titular: this.forms.value.titular,
      numeroDeTarjeta: this.forms.value.nroTarjeta,
      fechaExpiracion: this.forms.value.fechaExpiracion,
      cvv: this.forms.value.cvv,
      fechaActualizacion: new Date(),
      fechaCreacion: new Date(),
    }
    console.log(TARJETA)
  }
}
