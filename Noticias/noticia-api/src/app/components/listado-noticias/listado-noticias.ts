import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-noticias',
  imports: [CommonModule],
  templateUrl: './listado-noticias.html',
  styleUrl: './listado-noticias.css'
})
export class ListadoNoticias implements OnInit {

  @Input() listadoNoticias: any

  constructor() {}
  ngOnInit(): void {
    
  }
}
