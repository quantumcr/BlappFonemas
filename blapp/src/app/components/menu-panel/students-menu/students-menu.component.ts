import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../../../services/authentication.service';

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

  constructor(
    private navCtrl: NavController,
    public authenticationService: AuthenticationService
    ) { }

  ngOnInit() {}

  selectTheme(event: any) {
    console.log(event.target.value);
    this.navCtrl.navigateForward('/' + event.target.value);
  }

}
