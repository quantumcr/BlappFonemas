import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VIDEOS } from '../../../data/data.videos';
import { VideoSelected } from '../../models/video-selected';
import { PhonemeConsonantI } from '../../../data/audio/fonemas/consonantes/data.consonantes';
import { PhonemeVocalI } from '../../../data/audio/fonemas/vocales/data.vocales';

@Component({
  selector: 'app-phoneme-view',
  templateUrl: './phoneme-view.component.html',
  styleUrls: ['./phoneme-view.component.scss'],
})
export class PhonemeViewComponent implements OnInit {
  @Input() phoneme: PhonemeVocalI;

  public indexData: number = 0;
  //@Input() valueFonemaView: string;

  public videoData = new VideoSelected();
  public visiblePhoneme = true;
  public visibleVideo = false;
  //public comandoFonema: string;

  constructor(

  ) { }

  ngOnInit() {
    this.getVideo(this.phoneme.vocal);
  }

  selectPanel(value: string) {
    this.setVisible(value);
  }

  setVisible(value: string) {
    if (value === 'video') {
      this.visibleVideo = true;
      this.visiblePhoneme = false;
    }
    if (value === 'phoneme') {
      this.visibleVideo = false;
      this.visiblePhoneme = true;
    }
  }

  getVideo(value: string) {
    for(let i = 0; i < VIDEOS.length; i++) {
      if (VIDEOS[i].nombre === value) {
        this.videoData.nombre = VIDEOS[i].nombre;
        this.videoData.video = VIDEOS[i].video;
        this.videoData.imagen = VIDEOS[i].imagen;
        this.videoData.mensaje = VIDEOS[i].mensaje;
        this.videoData.duracion = VIDEOS[i].duracion;
        this.videoData.reproduciendo = VIDEOS[i].reproduciendo;
        break;
      }
    }
  }

  /*
  ejecutarAccion($event) {
    
  }
  */

  incIndexData() {
    if (this.phoneme.data.length - 1 == this.indexData) {
      this.indexData = 0;
    } else {
      this.indexData++;
    }
  }

  decIndexData() {
    if (this.indexData == 0) {
      this.indexData = this.phoneme.data.length - 1;
    } else {
      this.indexData--;
    }
  }

}
