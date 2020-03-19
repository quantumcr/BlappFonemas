import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-consonant-bar',
  templateUrl: './consonant-bar.component.html',
  styleUrls: ['./consonant-bar.component.scss'],
})
export class ConsonantBarComponent implements OnInit {
  //@Input() Video: string;
  @Input() fonema: string;
  @Input() mensaje: string;
  @Input() imagen: string;
  @Output() barEvent = new EventEmitter();

  public visibleAudio = false;
  public visibleVideo = true;

  constructor(

  ) { }

  ngOnInit() {

  }

  openPanel(event: any) {
    this.barEvent.emit(event.target.value);
    this.setVisible(event.target.value);
  }

  /*
  playVideo() {

  }
  */

  setVisible(value: string) {
    if ( value === 'video') {
      this.visibleVideo = false;
      this.visibleAudio = true;
    }
    if (value === 'phoneme') {
      this.visibleVideo = true;
      this.visibleAudio = false;
    }
  }

}
