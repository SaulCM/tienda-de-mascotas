import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarRoutingModule } from './registrar-routing.module';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [FormularioComponent],
  imports: [
    CommonModule,
    RegistrarRoutingModule
  ]
})
export class RegistrarModule { }
