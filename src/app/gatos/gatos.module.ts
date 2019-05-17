import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatosRoutingModule } from './gatos-routing.module';
import { CatalogComponent } from './catalog/catalog.component';

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    GatosRoutingModule
  ]
})
export class GatosModule { }
