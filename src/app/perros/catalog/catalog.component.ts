import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Productosperro } from 'src/app/shared/models/productosperro';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'iso-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products$ : Observable<Productosperro[]>;
  products: Productosperro[];
  constructor(private productsperroService:ProductosService) { }
  
  ngOnInit() :void{
    this.products$=this.productsperroService.getProducts();
    this.products$.subscribe(products=>{
      this.products=products;
      console.log(this.products);
    })

  }

}
