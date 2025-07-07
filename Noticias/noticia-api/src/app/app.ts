import { Component, NgModule } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Formulario } from "./components/formulario/formulario";
import { ListadoNoticias } from "./components/listado-noticias/listado-noticias";
import { NoticiasService } from './services/noticias';
import { HttpClient } from '@angular/common/http';
import { Spinner } from './shared/spinner/spinner';
import { BrowserModule } from '@angular/platform-browser';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Navbar, Formulario, ListadoNoticias, Spinner, NgIf],
  providers: [NoticiasService, HttpClient, Spinner, BrowserModule, NgModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'noticia-api';
  listadoDeNoticias: any[] = [];
  loading: boolean = false;

  constructor(private _api: NoticiasService) {

  }

  buscarNoticias(parametro: any) {
    this.loading = true;
    this.listadoDeNoticias = [];

    setTimeout(() => {
      this._api.getNoticias(parametro).subscribe(result => {
        console.log(result)
        this.loading = false;
        this.listadoDeNoticias = result.data;
      }
      )
    }, 1000)
  }
}
