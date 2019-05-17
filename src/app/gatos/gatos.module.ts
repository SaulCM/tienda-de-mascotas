import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatosRoutingModule } from './gatos-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductosService } from './productos.service';

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    GatosRoutingModule
  ],
  providers:[ProductosService]
})
export class GatosModule { }
