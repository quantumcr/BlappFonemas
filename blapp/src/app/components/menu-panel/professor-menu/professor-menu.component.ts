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
  audio = new Audio();

  public visiblePlay = true;
  public visibleMute = false;
  
  constructor(
    private navCtrl: NavController,
    private authenticationService: AuthenticationService,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit() {
  }

  selectTheme(event: any) {
    console.log(event.target.value);
    this.audio.pause();
    this.navCtrl.navigateForward('/' + event.target.value);
  }

  logout() {
    // this.authenticationService.logout();
    this.authService.logout();
  }

  play() {
    this.audio.src = 'assets/audio/menu/Funky Souls_Amaria.mp3';
    this.audio.load();
    this.audio.play();
    this.visiblePlay=false;
    this.visibleMute=true;
  }
  mute() {
    this.audio.pause();
    this.visiblePlay=true;
    this.visibleMute=false;
  }

}
