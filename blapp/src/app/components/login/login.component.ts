import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

import { UserService } from '../../services/user.service';
import { AuthenticationService, TokenResponse } from '../../services/authentication.service';
// Servicio para Firebase
import { AuthService } from '../../services/auth.service';

import { User } from '../../models/user';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { Router } from '@angular/router';

// Notificacion de Ingreso
import {AlertController} from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() usuario: string;
  @Input() clave: string;
  @Input() comando: string;
  email: string;
  password: string;

  newUser = new User;
  newStudent = new Student;

  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private studentService: StudentService,
    private route: Router,
    private authService: AuthService,
    private alertController: AlertController
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
      console.log("Login Incorrecto :");
    });
    this.loginFirebase();
  }

  goToRegistro() {
    // this.navCtrl.navigateForward('/registro');
  }

  loginFirebase(){
    console.log('Estas en el login Firebase');
    this.authService.login(this.email, this.password).then(res => {
      this.presentAlert();
      // this.route.navigate(['/menu']); // Se requiere validar entre estudiantes y docentes
    }).catch(err => this.errorAlert());
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: ' Verificación de Acceso',
      subHeader: 'Acceso Confirmado',
      message: 'Bienvenidos a Coletín',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.route.navigate(['/menu']); // Se requiere validar entre estudiantes y docentes
          }
        }
      ]
    });

    await alert.present();
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: ' Verificación de Acceso',
      subHeader: 'Acceso Denegado',
      message: 'Usuario y contraseña inválidos',
      buttons: ['OK']
    });

    await alert.present();
  }

}
