import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhonemeConsonantI } from '../../../data/audio/fonemas/consonantes/data.consonantes';

@Component({
  selector: 'app-consonantes',
  templateUrl: './consonantes.page.html',
  styleUrls: ['./consonantes.page.scss'],
})
export class ConsonantesPage implements OnInit {
  public phonemeConsonant: PhonemeConsonantI;
  //public valueFonema = null;
  //public mensajeFonema: string;
  
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.phonemeConsonant = JSON.parse(params['phoneme']);
    });
    //this.valueFonema = this.activateRoute.snapshot.paramMap.get('value');
    //console.log(this.valueFonema);
  }

}
