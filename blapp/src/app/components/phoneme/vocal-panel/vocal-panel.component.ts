import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-vocal-panel',
  templateUrl: './vocal-panel.component.html',
  styleUrls: ['./vocal-panel.component.scss'],
})
export class VocalPanelComponent implements OnInit {
  value: string;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  goToPhoneme(event: any) {
    console.log(event.target.value);
    this.value = event.target.value;
    this.navCtrl.navigateForward(['/fonema', this.value]);
  }

}
