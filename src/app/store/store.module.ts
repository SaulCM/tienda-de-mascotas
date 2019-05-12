import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { CatalogoPerrosComponent } from './catalogo-perros/catalogo-perros.component';

@NgModule({
  declarations: [CatalogoPerrosComponent],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
