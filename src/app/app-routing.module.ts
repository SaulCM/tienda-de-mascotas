import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    {path: 'store',
    loadChildren: './store/store.module#StoreModule'}
   // {path: 'registrar',
    //loadChildren: './registrar/registrar.module#RegistrarModule'},
    // canActivate: [AuthGuard]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
