import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosparaperroService } from '../productosparaperro.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'iso-catalogo-perros',
  templateUrl: './catalogo-perros.component.html',
  styleUrls: ['./catalogo-perros.component.css']
})
export class CatalogoPerrosComponent implements OnInit {
  productosparaperro$: Observable<Product[]>;

  constructor(private productosparaperroService: ProductosparaperroService) { }

  ngOnInit():void{
    this.productosparaperro$=this.productosparaperroService.getProducts();
  }
  buyProduct(product: Product){
    this.productosparaperroService.registerPurchase(product);
  }

}
