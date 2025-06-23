import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Slidebar } from './slidebar/slidebar';
import { Card } from './card/card';
import { NgFor } from '@angular/common';

interface Tarjeta {
  titulo: string;
  subtitulo: string;
  image: string;
}

@Component({
  selector: 'app-root',
  imports: [Header, Card, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Mi primer App ANGULAR';
  public ArregloTarjetas: Tarjeta[] = []

  ngOnInit(): void {
    this.ArregloTarjetas = [
        {titulo: 'Video 1', subtitulo: 'subtitulo del video 1', image: "https://i.pinimg.com/736x/bc/c6/99/bcc6997d5b35fceb01c4525560897bf3.jpg"},
        {titulo: 'Video 2', subtitulo: 'subtitulo del video 2', image: "https://i.pinimg.com/736x/e7/91/0c/e7910c7275806585bb8bdd3a18ec333a.jpg"},
        {titulo: 'Video 3', subtitulo: 'subtitulo del video 3', image: "https://i.pinimg.com/736x/c4/d6/51/c4d6514cbf498ed87365b06356d7bc23.jpg"},
    ];
  }
}
