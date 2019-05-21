import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { first, take, switchMap } from 'rxjs/operators';

import { UserService } from '../shared/services/user.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class AuthService {
  displayError = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private afAuth: AngularFireAuth,
    private db:AngularFirestore
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
          .subscribe(() => {
            this.router.navigate(['/']);
          });
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
  registraralimento(tipo:String, nombre:String, precio:number, peso:number, raza: String, tamano: String, descripcion:String,imagen:String){
    this.db.collection("productosparaperro").add(
            {tipo,nombre,precio,peso,raza,tamano,descripcion,imagen}
          )
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        this.router.navigate(['/register']);
  }
  registrararticulo(tipo:String, nombre:String, precio:number,descripcion:String,imagen:String){
    this.db.collection("productosparaperro").add(
      {tipo,nombre,precio,descripcion,imagen}
          )
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        this.router.navigate(['/login']);
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
