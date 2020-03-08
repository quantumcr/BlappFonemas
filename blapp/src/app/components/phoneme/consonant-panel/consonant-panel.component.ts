import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-consonant-panel',
  templateUrl: './consonant-panel.component.html',
  styleUrls: ['./consonant-panel.component.scss'],
})
export class ConsonantPanelComponent implements OnInit {
  value:string;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  goToPhoneme(event: any) {
    console.log(event.target.value);
    this.value = event.target.value;
    this.navCtrl.navigateForward(['/consonantes',this.value]);
  }
}
