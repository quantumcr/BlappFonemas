import { Component, OnInit, Input, ɵɵNgOnChangesFeature } from '@angular/core';
import { VideoSelected } from '../../models/video-selected';
import { VIDEOS } from '../../../data/data.videos';
import { PhonemeConsonantI, OneDataPhonemeConsonantI } from '../../../data/audio/fonemas/consonantes/data.consonantes';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-phoneme-consonant-view',
  templateUrl: './phoneme-consonant-view.component.html',
  styleUrls: ['./phoneme-consonant-view.component.scss'],
})
export class PhonemeConsonantViewComponent implements OnInit {
  @Input() phoneme: PhonemeConsonantI;
  public silaba: number = 0;
  public indexData: number = 0;
  public indexSData: number = 0;
  
  public videoData = new VideoSelected();
  public visiblePhoneme = true;
  public visibleVideo = false;
  public comandoFonema: string;
  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.getVideo(this.phoneme.consonante);
  }
  selectSilaba(index: number){
    this.indexSData = index;
    this.indexData = 0;
    
  }
  selectPanel(value: string) {
    console.log(value);
    this.setVisible(value);
  }

  setVisible(value) {
    if ( value === 'video') {
      this.visibleVideo = true;
      this.visiblePhoneme = false;
    }
    if (value === 'phoneme') {
      this.visibleVideo = false;
      this.visiblePhoneme = true;
    }
  }

  comeBackTo(){
    this.navCtrl.navigateForward('/fonemas');
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

  incIndexData() {
    if (this.phoneme.dataS[this.indexSData].data.length - 1 == this.indexData) {
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
