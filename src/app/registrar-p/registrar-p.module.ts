import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarPRoutingModule } from './registrar-p-routing.module';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [FormularioComponent],
  imports: [
    CommonModule,
    RegistrarPRoutingModule
  ]
})
export class RegistrarPModule { }
