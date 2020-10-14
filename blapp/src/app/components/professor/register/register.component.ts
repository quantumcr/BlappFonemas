import { Component, OnInit, Input } from '@angular/core';

import { StudentService } from '../../../services/student.service';

import { UserService } from '../../../services/user.service';
import { TokenResponse } from '../../../services/authentication.service';

import { Student, EncargadoLegal, Encargado } from '../../../models/student';
import { User } from '../../../models/user';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
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

  public studentForm = new FormGroup({
    nombre: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z áéíóú]*')
    ])),
    edad: new FormControl('', Validators.compose([
      Validators.required,
      Validators.min(0),
      Validators.max(120)
    ])),
    sexo: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('[a-zA-Z áéíóú]*')
    ])),
    direccion: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z áéíóú]*')
    ])),
    encargadoLegal: new FormGroup({      
      direccion: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])),
      nombre: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z áéíóú]*')
      ]))
    })
  });

  public validation_messages = {
    'nombre': [
      { type: 'required', message: 'Nombre es requerido' },
      { type: 'minlength', message: 'Nombre debe ser de al menos 3 caracteres' },
      { type: 'pattern', message: 'Su nombre debe contener solo letras' }
    ],
    'edad': [
      { type: 'required', message: 'Edad es requerida' },
      { type: 'min', message: 'Edad debe ser mayor de 0' },
      { type: 'max', message: 'Edad debe ser menor de 120' }
    ],
    'sexo': [
      { type: 'required', message: 'Sexo es requerido' },
      { type: 'pattern', message: 'Su sexo debe contener solo letras' }
    ],
    'encargado_direccion': [
      { type: 'required', message: 'Dirección es requerido' },
      { type: 'minlength', message: 'Dirección debe ser de al menos 3 caracteres' },
    ],
    'encargado_nombre': [
      { type: 'required', message: 'Nombre del encargado es requerido' },
      { type: 'minlength', message: 'Nombre del encargado debe ser de al menos 3 caracteres' },
      { type: 'pattern', message: 'El nombre del encargado debe contener solo letras' }
    ],
    'email': [
      { type: 'required', message: 'Email es requerido' },
      { type: 'pattern', message: 'El email debe contener el formato de un email' }
    ],
    'password': [
      { type: 'required', message: 'Contraseña es requerida' },
      { type: 'minlength', message: 'Contraseña debe ser de al menos 5 caracteres' },
    ]
  }

  public userForm = new FormGroup({
    nombre: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z áéíóú]*')
    ])),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    password: new FormControl('', Validators.compose([
      Validators.minLength(5),
      Validators.required
    ]))
  })
  public encargados =[];
  public encargadoLegal: Encargado;
  newStudent = new Student();
  newUser = new User();

  constructor(
    private studentService: StudentService,
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    
  }

  register() {
    this.newUser.nombre = this.newStudent.nombre;
    this.newUser.tipo = 'Estudiante';
    console.log('Informacion del Encargado Legal');
    console.log(this.newStudent.encargadoLegal);
    console.log('Informacion del Estudiante');
    console.log(this.newStudent);
    console.log('Informacion del Usuario');
    console.log(this.newUser);
    this.authService.registerStudent(this.newUser, this.newStudent).then(res => {
      this.newUser.uid = localStorage.getItem('uidStudent');
      this.newStudent._id = localStorage.getItem('uidStudent');
      const miEncargado: Encargado={
        nombre: this.newStudent.encargadoLegal.nombre,
        profesion: "por asignar",
        telefono: "por asignar",
        direccion: this.newStudent.encargadoLegal.direccion
      }
      //this.studentService.updateChildLegalGuardian(miEncargado,this.newStudent._id);
      //this.router.navigate(['estudiantes'], { queryParams: { _id: this.newStudent._id } });
    }).catch(err => {
      console.log("Error creando usuario", err);
    });

    /*this.studentService.createStudent(this.newStudent)
    .then((student: Student) => {
      console.log(student);
      //delete this.newUser._id;
      this.newUser.tipo = "Estudiante";
      this.newUser.uid = student._id;
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
    });*/
  }
}
