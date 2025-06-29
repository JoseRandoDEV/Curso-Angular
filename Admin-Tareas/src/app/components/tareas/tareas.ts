import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tareas',
  imports: [FormsModule, CommonModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css'
})
export class Tareas {
  listaTareas: Tarea[] = [];
  nombreTarea: string = '';

  constructor() { };

  agregarTarea() {
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    this.listaTareas.push(tarea);
    this.nombreTarea = '';
  }

  eliminarTarea(i: number) {
    this.listaTareas.splice(i, 1);
  }

  actualizarTarea(tarea: Tarea, i: number) {
    this.listaTareas[i].estado = !tarea.estado;
  }
}
