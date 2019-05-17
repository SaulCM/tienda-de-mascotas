import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Productosperro } from '../shared/models/productosperro';

@Injectable()
export class ProductosService {

  constructor(private db: AngularFirestore){}

  getProducts(): Observable<Productosperro[]>{
    return this.db.collection<Productosperro>('productosparaperro').valueChanges();
  }
}
