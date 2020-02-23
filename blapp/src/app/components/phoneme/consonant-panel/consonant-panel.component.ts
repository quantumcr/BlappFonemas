import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-consonant-panel',
  templateUrl: './consonant-panel.component.html',
  styleUrls: ['./consonant-panel.component.scss'],
})
export class ConsonantPanelComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  goToPhoneme($event: any) {
    this.navCtrl.navigateForward('/fonema');
  }
}
