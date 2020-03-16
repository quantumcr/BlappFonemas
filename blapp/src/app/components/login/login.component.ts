import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

import { UserService } from '../../services/user.service';
import { AuthenticationService, TokenResponse } from '../../services/authentication.service';

import { User } from '../../models/user';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { Router } from '@angular/router';

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
    private studentService: StudentService,
    private route: Router
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
      document.getElementById('email').setAttribute('value', '');
      document.getElementById('password').setAttribute('value', '');
      if (this.authenticationService.getUserDetails().tipo.toUpperCase() == "ESTUDIANTE") {
        // Redireccionar al menu del estudiante
        //this.navCtrl.navigateForward('/menu');        
        this.route.navigate(['/menu'], { queryParams: { tipo: false }});
      } else if (this.authenticationService.getUserDetails().tipo.toUpperCase() == "DOCENTE") {
        // Redireccionar al menu del docente
        //this.navCtrl.navigateForward('/menu');
        this.route.navigate(['/menu'], { queryParams: { tipo: true }});
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
