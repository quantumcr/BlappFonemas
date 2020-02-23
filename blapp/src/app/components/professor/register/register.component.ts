import { Component, OnInit, Input } from '@angular/core';

import { StudentService } from '../../../services/student.service';

import { UserService } from '../../../services/user.service';
import { TokenResponse } from '../../../services/authentication.service';

import { Student } from '../../../models/student';
import { User } from '../../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Input() nombre: string;
  @Input() edad: string;
  @Input() genero: string;
  @Input() residencia: string;
  @Input() encargado: string;
  @Input() email: string;
  @Input() password: string;
  @Input() comando: string;

  newStudent = new Student;
  newUser = new User;

  constructor(
    private studentService: StudentService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {}

  setName(event: any) {
    this.newStudent.nombre = event.target.value;
  }

  setAge(event: any) {
    this.newStudent.edad = event.target.value;
  }

  setGender(event: any) {
    this.newStudent.sexo = event.target.value;
  }

  setAddress(event: any) {
    this.newStudent.encargadoLegal.direccion = event.target.value;
  }

  setLegalOfficer(event: any) {
    this.newStudent.encargadoLegal.nombre = event.target.value;
  }

  setEmail(event: any) {
    this.newUser.email = event.target.value;
  }

  setPassword(event: any) {
    this.newUser.password = event.target.value;
  }

  register() {
    delete this.newStudent._id;
    this.studentService.createStudent(this.newStudent)
    .then((student: Student) => {
      console.log(student);
      delete this.newUser._id;
      this.newUser.tipo = "Estudiante";
      this.newUser.idUsuario = student._id;
      this.userService.createUser(this.newUser)
      .then((userToken: TokenResponse) => {        
        console.log(userToken);
        this.router.navigate(['estudiantes'], { queryParams: { _id: student._id } });
      })
      .catch(err => {
        console.log("Error creando usuario", err);
      });
    })
    .catch(err => {
      console.log("Error creando estudiante", err);
    });    
  }
}
