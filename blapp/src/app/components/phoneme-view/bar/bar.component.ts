import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VIDEOS } from '../../../../data/data.videos';
import { Video } from '../../../interfaces/video';
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {
  @Input() Video: string;
  @Input() fonema: string;
  @Input() mensaje: string;
  @Output() barEvent = new EventEmitter();
  public visibleAudio = false;
  public visibleVideo = true;
  constructor() { }

  ngOnInit() {
  }
  openPanel(event: any) {
    console.log(event.target.value);
    this.barEvent.emit(event.target.value);
    this.setVisible(event.target.value);

  }
  playVideo() {}
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
