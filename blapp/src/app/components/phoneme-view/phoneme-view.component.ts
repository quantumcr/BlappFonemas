import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phoneme-view',
  templateUrl: './phoneme-view.component.html',
  styleUrls: ['./phoneme-view.component.scss'],
})
export class PhonemeViewComponent implements OnInit {
  public visiblePhoneme = true;
  public visibleVideo = false;
  constructor() { }

  ngOnInit() {}

  selectPanel(value: string) {
    console.log(value);
    this.setVisible(value);
  }

  setVisible( value) {
    if ( value === 'video') {
      this.visibleVideo = true;
      this.visiblePhoneme = false;
    }
    if (value === 'phoneme') {
      this.visibleVideo = false;
      this.visiblePhoneme = true;
    }


  }

}
