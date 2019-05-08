import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private afs: AngularFirestore) {}

  getUser(uid: string): Observable<any> {
    return this.afs.doc(`users/${uid}`).valueChanges();
  }

  createUser(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const data = {
      uid: user.uid,
      email: user.email
    };
    return from(userRef.set(data, { merge: true }));
  }
}
