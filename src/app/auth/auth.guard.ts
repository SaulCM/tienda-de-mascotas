import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const authState: Observable<any> = this.auth.getAuthUser();
    return authState.pipe(
      map(user => {
        if (
          state.url === '/login' ||
          state.url === '/register'
        ) {
          const falseCondition: boolean = user !== null;
          return this.checkLogIn(falseCondition, '/home');
        }
        return this.checkLogIn(user === null, '/login');
      })
    );
  }

  checkLogIn(falseCondition: boolean, url: string): boolean {
    if (falseCondition) {
      this.router.navigate([url]);
      return false;
    }
    return true;
  }
}
