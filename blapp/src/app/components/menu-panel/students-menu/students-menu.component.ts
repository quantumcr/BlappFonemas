import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-students-menu',
  templateUrl: './students-menu.component.html',
  styleUrls: ['./students-menu.component.scss'],
})
export class StudentsMenuComponent implements OnInit {
  @Input() titulo: string;
  @Input() usuario: string;
  @Input() opcion1: string;
  @Input() opcion2: string;

  audio = new Audio();

  public visiblePlay = true;
  public visibleMute = false;

  constructor(
    private navCtrl: NavController,
    public authenticationService: AuthenticationService,
    private router: Router,
    public authService: AuthService
    ) { }

  ngOnInit() {
    this.play();
  }

  selectTheme(event: any) {
    console.log(event.target.value);
    this.audio.pause();
    this.navCtrl.navigateForward('/' + event.target.value);
  }

  logout(){
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
