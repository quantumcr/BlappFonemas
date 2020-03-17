import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhonemeVocalI } from '../../../data/audio/fonemas/vocales/data.vocales';

@Component({
  selector: 'app-fonema',
  templateUrl: './fonema.page.html',
  styleUrls: ['./fonema.page.scss'],
})
export class FonemaPage implements OnInit {
  public phonemeVocal: PhonemeVocalI;
  //public valueFonema = null;
  //public mensajeFonema: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.phonemeVocal = JSON.parse(params['phoneme']);
    });
    //this.valueFonema = this.activateRoute.snapshot.paramMap.get('value');
    //console.log(this.valueFonema);
  }

}
