import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Productosgato } from '../shared/models/productosgato';

@Injectable()
export class ProductosService {

  constructor(private db: AngularFirestore){}

  getProducts(): Observable<Productosgato[]>{
    return this.db.collection<Productosgato>('productosparaperro').valueChanges();
  }
}
