import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoPerrosComponent } from './catalogo-perros/catalogo-perros.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogoPerrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
