import { Injectable, } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import { User } from '../models/user';
import { UserService } from './user.service';
import { Student } from '../models/student';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  nuevoUsuario = new User();
  constructor(
    private AFauth: AngularFireAuth,
    public router: Router,
    private db: AngularFirestore,
    private userService: UserService,
    private studentService: StudentService
    ) { }
  // Ingreso a la aplicación
  login(email: string, password: string) {
    return new Promise((resolve, rejected) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(user =>{
        localStorage.setItem('token', user.user.uid);
        this.userService.getUser(user.user.uid).subscribe(myUser => {
          this.nuevoUsuario = myUser as User;
          localStorage.setItem('usuario', JSON.stringify(this.nuevoUsuario));
          console.log('Este es el usuario del observable');
          console.log(this.nuevoUsuario);
        });
        console.log(localStorage.getItem('token'));
        resolve(user);
      }).catch(err => rejected(err));
    });

  }

  logout() {
    this.AFauth.signOut().then(auth =>{
      this.router.navigate(['/inicio']);
    })
  }

  resetPassword(email: string){
    return this.AFauth.sendPasswordResetEmail(email);
  }

  register(user: User) {
    return new Promise ((resolve, rejected) => {
      this.AFauth.createUserWithEmailAndPassword(user.email, user.password).then(res => {
        const uid = res.user.uid;
        this.db.collection('users').doc(uid).set({
          nombre: user.nombre,
          uid: uid,
          tipo: user.tipo
        });
        resolve(res);
      }).catch(err => rejected(err));
    }
    );
  }
  registerStudent(user: User, student: Student){
    return new Promise ((resolve, rejected) => {
      this.AFauth.createUserWithEmailAndPassword(user.email, user.password).then(res => {
        this.AFauth.setPersistence('none');
        const uid = res.user.uid;
        localStorage.setItem('uidStudent', uid);
        student._id = uid;
        this.db.collection('users').doc(uid).set({
          nombre: user.nombre,
          uid: uid,
          tipo: user.tipo
        });
        this.db.collection('students').doc(uid).set({
          uid: student._id,
          nombre: student.nombre,
          cedula: student.cedula,
          sexo: student.sexo,
          edad: student.edad,
          encargadoLegal: student.encargadoLegal
          //familia: student.familia,
          //alimentacion: student.alimentacion
        });
        //this.addEncargadoLegal(student._id, student);
        resolve(res);
      }).catch(err => rejected(err));
    }
    );
  }
  addEncargadoLegal(id: string, student: Student){
    console.log('Esta es la informacion para actualizar el Encargado');
    console.log(student.encargadoLegal);
    this.db.collection('students').doc(id).update({
      EncargadoLegal: student.encargadoLegal
    });
  }
  getUser(){
      const uid = localStorage.getItem('token');
      const user = this.db.collection('users', ref => ref.where('uid', '==', this.AFauth.currentUser)).get();


      /*?var museums = this.db.collectionGroup('landmarks').where('type', '==', 'museum');
museums.get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
        console.log(doc.id, ' => ', doc.data());
    });
});*/

  }



}
