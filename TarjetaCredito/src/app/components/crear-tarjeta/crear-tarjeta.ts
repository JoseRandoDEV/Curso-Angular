import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TarjetaCredito } from '../../models/tarjeta';
import { TarjetaService } from '../../services/tarjeta';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.html',
  styleUrls: ['./crear-tarjeta.css'],
  imports: [ReactiveFormsModule, CommonModule],
  providers: [],
  standalone: true
})
export class CrearTarjeta implements OnInit {

  forms: FormGroup;

  constructor(private fb: FormBuilder, private tarjetaService: TarjetaService) {

    this.forms = this.fb.group({
      titular: ['', Validators.required],
      nroTarjeta: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    });
  }

  ngOnInit(): void {
    // Aquí puedes inicializar cualquier dato necesario al cargar el componente
    console.log('Componente CrearTarjeta inicializado');
  }

  crearTarjeta() {
    console.log(this.forms);

    const TARJETA: TarjetaCredito = {
      titular: this.forms.value.titular,
      numDeTarjeta: this.forms.value.nroTarjeta, // Asegúrate que es 'nroTarjeta' y no 'numDeTarjeta'
      cvv: this.forms.value.cvv,
      fechaActualizacion: new Date(),
      fechaCreacion: new Date(),
      fechaExpiracion: this.forms.value.fechaExpiracion
    };
    this.tarjetaService.guardarTarjeta(TARJETA).then(() => {
      console.log('Tarjeta Registrada...');
      this.forms.reset();
    },error => {
      console.log(error);
    });
  }
}


