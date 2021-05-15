import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phoneme',
  templateUrl: './phoneme.component.html',
  styleUrls: ['./phoneme.component.scss'],
})
export class PhonemeComponent implements OnInit {
  public visibleVocal = true;
  public visibleConsonant = false;
  public visibleGame = false;
  constructor() { }

  ngOnInit() {}

  selectPanel(value: string) {
    console.log(value);
    this.setVisible(value);
  }

  setVisible( value) {
    if ( value === 'vocales') {
      this.visibleVocal = true;
      this.visibleConsonant = false;
      this.visibleGame = false;
    }
    if (value === 'consonantes') {
      this.visibleVocal = false;
      this.visibleConsonant = true;
      this.visibleGame = false;
    }
    if (value === 'jugar') {
      this.visibleVocal = false;
      this.visibleConsonant = false;
      this.visibleGame = true;
    }

  }



}
