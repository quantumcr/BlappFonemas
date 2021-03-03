import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhonemeConsonantI, PhonemeGameI } from '../../../data/audio/fonemas/consonantes/data.consonantes';
@Component({
  selector: 'app-juego-fonemas',
  templateUrl: './juego-fonemas.page.html',
  styleUrls: ['./juego-fonemas.page.scss'],
})
export class JuegoFonemasPage implements OnInit {
  public phonemeConsonant: PhonemeGameI;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.phonemeConsonant = JSON.parse(params['phoneme']);
    });
  }

}
