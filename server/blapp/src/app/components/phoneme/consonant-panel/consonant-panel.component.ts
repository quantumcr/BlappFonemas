import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PhonemeConsonantI, CONSONANTES } from '../../../../data/audio/fonemas/consonantes/data.consonantes';
@Component({
  selector: 'app-consonant-panel',
  templateUrl: './consonant-panel.component.html',
  styleUrls: ['./consonant-panel.component.scss'],
})
export class ConsonantPanelComponent implements OnInit {    
  //public value:string;

  constructor(
    private navCtrl: NavController,
    private route: Router
  ) { }

  ngOnInit() {

  }

  goToPhoneme(phonemeConsonantNameSelected: string): void {
    let phonemeConsonantData: PhonemeConsonantI = this.getPhonemeConsonant(phonemeConsonantNameSelected);
    this.route.navigate(['/consonantes'], { queryParams: { phoneme: JSON.stringify(phonemeConsonantData) }});
    //console.log(event.target.value);
    //this.value = event.target.value;
    //this.navCtrl.navigateForward(['/consonantes',this.value]);
  }

  getPhonemeConsonant(phonemeConsonanName: string): PhonemeConsonantI {
    phonemeConsonanName = phonemeConsonanName.toUpperCase();
    for (let i = 0; i < CONSONANTES.length; i++) {
      if (CONSONANTES[i].consonante.toUpperCase() == phonemeConsonanName) {
        return CONSONANTES[i] as unknown as PhonemeConsonantI;
      }
    }
  }

}
