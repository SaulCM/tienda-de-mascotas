import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const authState: Observable<any> = this.firebaseAuth.authState;
    return authState.pipe(
      map(user => {
        if (state.url === '/login') {
          const falseCondition: boolean = user !== null;
          return this.checkLogIn(falseCondition, '/');
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
