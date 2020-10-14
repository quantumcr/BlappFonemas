import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Student, EncargadoLegal, MiembrosFamilia, Encargado } from '../models/student';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { firestore } from 'firebase';
export interface NameStudents {
  _id: String;
  nombre: String;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // Direccion del API en el servidor de Heroku
  readonly URL_API = 'https://blapp.herokuapp.com/api/students';  
  constructor(
    private http: HttpClient,
    private db: AngularFirestore
  ) { }
  /*Creacion de Estudiantes
    Parametros de Entrada: Estudiante (Modelo Student)
    Retorno: Promesa
  */
  createStudent(student: Student) {
      return this.db.collection('students').doc(student._id).set({
        uid: student._id,
        nombre: student.nombre,
        cedula: student.cedula,
        sexo: student.sexo,
        edad: student.edad,
        encargadoLegal: student.encargadoLegal,
        //familia: student.familia,
        //alimentacion: student.alimentacion
      });
    //return this.http.post<Student>(this.URL_API, student, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).toPromise();
  }

  getStudents() {
    return this.db.collection('students').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as Student;
        data._id = a.payload.doc.id;
        return data;
      });
    }));
  }
  updateChildLegalGuardian(encargado: Encargado, _id: string){
    this.db.collection('students').doc(_id).update({
      encargadoLegal: encargado
    });
  }
  updateFamily(familia: MiembrosFamilia, _id: string){
    this.db.collection('students').doc(_id).update({
      familia: firestore.FieldValue.arrayUnion(familia)
    });
  }
  getStudent(_id: string) {
    return this.db.collection('students').doc(_id).valueChanges();
    //return this.http.get<Student>(this.URL_API + `/${_id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).toPromise();
  }

  getNameStudents() {
    return this.http.get<NameStudents>(this.URL_API + '/names', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).toPromise();
  }

  putDisableStudent(_id: String) {
    return this.http.put(this.URL_API + '/disable', { _id: _id }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).toPromise(); 
  }

  putStudent(student: Student) {
    return this.http.put(this.URL_API, student, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).toPromise();
  }
  updateStudent(student: Student) {
    console.log('Este es el estudiante que debo actualizar');
    console.log(student.nombre);
    console.log(student._id);
    return this.db.collection('students').doc(student._id).update(student);
  }
}
