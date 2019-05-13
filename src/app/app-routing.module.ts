import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    {path: 'store',
    loadChildren: './store/store.module#StoreModule'},
    {path: 'registrar-p',
    loadChildren: './registrar-p/registrar-p.module#RegistrarPModule'},
    // canActivate: [AuthGuard]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
