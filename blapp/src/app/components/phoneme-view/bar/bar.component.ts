import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OneDataPhonemeVocalI } from 'src/data/audio/fonemas/vocales/data.vocales';
//import { VIDEOS } from '../../../../data/data.videos';
//import { Video } from '../../../interfaces/video';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {
  //@Input() phonemeOneData: OneDataPhonemeVocalI;

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
