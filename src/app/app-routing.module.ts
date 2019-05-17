import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './auth/auth.module#AuthModule',
    // canActivate: [AuthGuard]
  },
  {
    path: 'perros',
    loadChildren: './perros/perros.module#PerrosModule'
  },
  {
    path: 'gatos',
    loadChildren: '/gatos/gatos.module#GatosModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
