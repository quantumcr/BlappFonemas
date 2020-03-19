import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PhonemeVocalI, VOCALES } from '../../../../data/audio/fonemas/vocales/data.vocales';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vocal-panel',
  templateUrl: './vocal-panel.component.html',
  styleUrls: ['./vocal-panel.component.scss'],
})
export class VocalPanelComponent implements OnInit {

  constructor(
    private navCtrl: NavController,
    private route: Router
  ) { }

  ngOnInit() {

  }

  goToPhoneme(phonemeNameSelected: string): void {
    let phonemeVocalData: PhonemeVocalI = this.getPhonemeVocal(phonemeNameSelected);
    this.route.navigate(['/fonema'], { queryParams: { phoneme: JSON.stringify(phonemeVocalData) }});
    //this.navCtrl.navigateForward(['/fonema', this.value]);
  }

  getPhonemeVocal(phonemeVocalName: string): PhonemeVocalI {
    phonemeVocalName = phonemeVocalName.toUpperCase();
    for (let i = 0; i < VOCALES.length; i++) {      
      if (VOCALES[i].vocal.toUpperCase() == phonemeVocalName) {
        return VOCALES[i] as unknown as PhonemeVocalI;
      }
    }
  }

}
