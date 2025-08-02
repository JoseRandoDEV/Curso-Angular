import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TarjetaCredito } from '../models/tarjeta';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class TarjetaService {

  constructor(private firebase: AngularFirestore) { }

  guardarTarjeta(tarjeta: TarjetaCredito): Promise <any> 
  {
    return this.firebase.collection('tarjetas').add(tarjeta);
  }

  listarTarjetas(): Observable<any>
  {
    return this.firebase.collection('tarjetas').snapshotChanges();
  }

  eliminarTarjeta(id: string): Promise<any> {
    return this.firebase.collection('tarjetas').doc(id).delete();
  }

}

