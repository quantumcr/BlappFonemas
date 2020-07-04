import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public tipoUsuario: Boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService    
  ) { }

  ngOnInit() {
    /*
    this.activatedRoute.queryParams.subscribe(params => {
      this.tipoUsuario = JSON.parse(params['tipo']);
    });*/
    // Revisar Esto con los nuevos servicios de Firebase
    /*
    if (this.authenticationService.getUserDetails().tipo.toUpperCase() == "ESTUDIANTE") {
      this.tipoUsuario = false;
    } else if (this.authenticationService.getUserDetails().tipo.toUpperCase() == "DOCENTE") {
      this.tipoUsuario = true;
    } */ 
  }

}
