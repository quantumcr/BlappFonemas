import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user'; 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  nuevoUsuario = new User();
  nombre: string;
  institucion: string;
  email: string;
  password: string;
  @Input() comando: string;


  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {}
//Vincular un Alert para la confirmacion del Registro
  registrar() {
    this.nuevoUsuario.tipo = 'Docente';
    this.authService.register(this.nuevoUsuario).then(auth =>{
      console.log(auth);
      this.route.navigate(['/inicio']);
      console.log(auth);
    }).catch(err => console.log(err));
    this.authService.logout();
  }

}
