import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card implements OnInit {

  public image: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY2psgCvTM-RedBtkSQg704HnzDTsNRiGkmQ&s";
  public Titulo: string = "Curso de Angular con interpolación";
  @Input() dataEntrante: any;
  constructor() {
    // Constructor vacío
  }
  ngOnInit(): void {
    // Método ngOnInit vacío
  }
}
