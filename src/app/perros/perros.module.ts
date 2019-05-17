import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerrosRoutingModule } from './perros-routing.module';
import { CatalogComponent } from './catalog/catalog.component';

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    PerrosRoutingModule
  ]
})
export class PerrosModule { }
