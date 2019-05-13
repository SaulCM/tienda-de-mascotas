import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { CatalogoPerrosComponent } from './catalogo-perros/catalogo-perros.component';
import { ProductosparaperroService } from './productosparaperro.service';

@NgModule({
  declarations: [CatalogoPerrosComponent],
  imports: [
    CommonModule,
    StoreRoutingModule
  ],//
  providers: [ProductosparaperroService]
})
export class StoreModule { }
