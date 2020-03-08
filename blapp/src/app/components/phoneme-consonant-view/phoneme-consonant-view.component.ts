import { Component, OnInit, Input } from '@angular/core';
import { VideoSelected } from '../../models/video-selected';
import { VIDEOS } from '../../../data/data.videos';
@Component({
  selector: 'app-phoneme-consonant-view',
  templateUrl: './phoneme-consonant-view.component.html',
  styleUrls: ['./phoneme-consonant-view.component.scss'],
})
export class PhonemeConsonantViewComponent implements OnInit {
  videoData = new VideoSelected();
  public visiblePhoneme = true;
  public visibleVideo = false;
  @Input() valueFonemaView: string;
  comandoFonema: string;
  constructor() { }

  ngOnInit() {
    this.getVideo(this.valueFonemaView);
  }

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

}
