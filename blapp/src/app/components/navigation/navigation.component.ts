import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  goToHome(event: any) {
    this.navCtrl.navigateForward('/menu');
  }

}
