import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any>
  {
    const URL= "http://api.mediastack.com/v1/news?access_key=56949cddf510097c12c9f85acbfdee9a&countries="+parametros.pais+"&categories="+parametros.categoria+""
    return this.http.get(URL)
  }
}
