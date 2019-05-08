import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { first, take, switchMap } from 'rxjs/operators';

import { UserService } from '../shared/services/user.service';

@Injectable()
export class AuthService {
  displayError = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}

  getAuthUser(): Observable<any> {
    return this.getAuthState().pipe(
      switchMap(user => {
        if (user) {
          return this.userService.getUser(user.uid);
        }
        return of(null);
      })
    );
  }

  login(email: string, password: string): void {
    this.displayError = false;
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        this.userService
          .createUser(credential.user)
          .pipe(first())
          .subscribe(() => this.router.navigate(['/']));
      })
      .catch(err => {
        this.displayError = true;
        console.error(err);
      });
  }

  register(email: string, password: string): void {
    this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.login(email, password);
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  logout(): void {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  private getAuthState(): Observable<any> {
    return this.afAuth.authState.pipe(take(1));
  }
}
