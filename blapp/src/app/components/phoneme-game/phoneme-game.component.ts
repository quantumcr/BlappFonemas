import { Component, OnInit, Input } from '@angular/core';
import { PhonemeConsonantI, PhonemeGameI } from '../../../data/audio/fonemas/consonantes/data.consonantes';

@Component({
  selector: 'app-phoneme-game',
  templateUrl: './phoneme-game.component.html',
  styleUrls: ['./phoneme-game.component.scss'],
})
export class PhonemeGameComponent implements OnInit {
  @Input() phoneme: PhonemeGameI;
  constructor() { }

  ngOnInit() {}

}
