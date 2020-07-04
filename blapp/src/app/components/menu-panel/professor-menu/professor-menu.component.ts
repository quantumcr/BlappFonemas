import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-professor-menu',
  templateUrl: './professor-menu.component.html',
  styleUrls: ['./professor-menu.component.scss'],
})
export class ProfessorMenuComponent implements OnInit {
  @Input() titulo: string;
  @Input() opcion1: string;
  @Input() opcion2: string;
  @Input() opcion3: string;
  
  constructor(
    private navCtrl: NavController,
    private authenticationService: AuthenticationService,
    private router: Router,
    public authService: AuthService
  ) { }

  ngOnInit() {}

  selectTheme(event: any) {
    console.log(event.target.value);
    this.navCtrl.navigateForward('/' + event.target.value);
  }

  logout() {
    // this.authenticationService.logout();
    this.authService.logout();
  }

}
