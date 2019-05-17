import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductosService } from '../productos.service';
import { Productosgato } from 'src/app/shared/models/productosgato';

@Component({
  selector: 'iso-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products$ : Observable<Productosgato[]>;
  constructor(private productsgatoService:ProductosService) { }
  
  ngOnInit() :void{
    this.products$=this.productsgatoService.getProducts();
  }

}
