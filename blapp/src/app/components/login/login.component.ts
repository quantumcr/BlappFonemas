import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

import { UserService } from '../../services/user.service';
import { AuthenticationService, TokenResponse } from '../../services/authentication.service';

import { User } from '../../models/user';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() usuario: string;
  @Input() clave: string;
  @Input() comando: string;

  newUser = new User;
  newStudent = new Student;

  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private studentService: StudentService
  ) { }

  ngOnInit() {}
  
  setEmail(event: any) {
    this.newUser.email = event.target.value;
  }

  setPassword(event: any) {
    this.newUser.password = event.target.value;
  }

  login() {
    this.userService.loginUser(this.newUser)
    .then((data: TokenResponse) => {
      this.authenticationService.saveToken(data.token);
      if (this.authenticationService.getUserDetails().tipo == "Estudiante") {
        // Redireccionar al menu del estudiante
        this.navCtrl.navigateForward('/menu');
      } else if (this.authenticationService.getUserDetails().tipo == "Docente") {
        // Redireccionar al menu del docente
        this.navCtrl.navigateForward('/menu');
      }      
    })
    .catch(err => {
      console.log("Login Incorrecto :(");
    });
  }

  goToRegistro() {
    // this.navCtrl.navigateForward('/registro');
  }

}
