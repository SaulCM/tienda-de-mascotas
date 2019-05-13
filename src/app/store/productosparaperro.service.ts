import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { Product } from '../shared/models/product';
@Injectable()
export class ProductosparaperroService {

  constructor(private db: AngularFirestore) { }
  
  getProducts(): Observable<Product[]>{
    return this.db.collection<Product>('productosparaperro').valueChanges();
  }
  registerPurchase(product: Product){
    console.log(product);
  }
}
