import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  nombre: string;
  institucion: string;
  email: string;
  password: string;
  @Input() comando: string;


  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {}
//Vincular un Alert para la confirmacion del Registro
  registrar() {
    this.authService.register(this.nombre, this.institucion, this.email, this.password).then(auth =>{
      this.route.navigate(['/inicio']);
      console.log(auth);
    }).catch(err => console.log(err));
    this.authService.logout();
  }

}
