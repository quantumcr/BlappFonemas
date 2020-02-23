import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-vocal-panel',
  templateUrl: './vocal-panel.component.html',
  styleUrls: ['./vocal-panel.component.scss'],
})
export class VocalPanelComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  goToPhoneme(event: any) {
    this.navCtrl.navigateForward('/fonema');
  }

}
