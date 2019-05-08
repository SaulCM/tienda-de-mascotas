import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidenavDirective } from './navbar/sidenav.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../shared/services/user.service';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, SidenavDirective],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent],
  providers: [AuthService, UserService]
})
export class LayoutModule {}
