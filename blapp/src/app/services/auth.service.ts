import { Injectable, } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, public router: Router, private db: AngularFirestore) { }
  // Ingreso a la aplicación
  login(email: string, password: string) {
    return new Promise((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(user =>{
        resolve(user);
      }).catch(err => rejected(err));
    });

  }

  logout() {
    this.AFauth.signOut().then(auth =>{
      this.router.navigate(['/inicio']);
    })
  }

  register(nombre: string, institucion: string, email: string, password: string) {
    return new Promise ((resolve, rejected) => {
      this.AFauth.createUserWithEmailAndPassword(email, password).then(res=>{
        const uid = res.user.uid;
        this.db.collection('users').doc(uid).set({
          nombre: nombre,
          institucion: institucion,
          uid: uid
        })
        resolve(res);
      }).catch(err => rejected(err));
    })

  }

  resetPassword(email: string){
    return this.AFauth.sendPasswordResetEmail(email);
  }
}
