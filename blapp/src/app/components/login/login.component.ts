import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() usuario: string;
  @Input() clave: string;
  @Input() comando: string;
  constructor( private navCtrl: NavController) { }

  ngOnInit() {}
  setEmail(event: any) {
    // this.newUser.email = event.target.value;
  }

  setPassword(event: any) {
    // this.newUser.password = event.target.value;
  }

  login() {
    // this.usuarioService.getUsuarioLogin(this.newUser.email, this.newUser.password);
    this.navCtrl.navigateForward('/menu');
  }

  goToRegistro() {
    // this.navCtrl.navigateForward('/registro');
  }

}
