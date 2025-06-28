import { Component } from '@angular/core';
import { Tareas } from './components/tareas/tareas';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Tareas, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [],
})
export class App {
  title = 'Admin-Tareas';
}

