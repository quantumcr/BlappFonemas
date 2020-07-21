import { Component, OnInit, Input } from '@angular/core';
import { OneDataPhonemeVocalI } from '../../../../data/audio/fonemas/vocales/data.vocales';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-phoneme-panel',
  templateUrl: './phoneme-panel.component.html',
  styleUrls: ['./phoneme-panel.component.scss'],
})
export class PhonemePanelComponent implements OnInit {
  @Input() phonemeOneData: OneDataPhonemeVocalI;
  
  public audio = new Audio();

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.audio.src = this.phonemeOneData.audio;
    this.audio.load();
  }
  comeBackTo(){
    this.navCtrl.navigateForward('/fonemas');
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.audio.src = this.phonemeOneData.audio;
    this.audio.load();
    //document.getElementById('imagen').setAttribute('src', this.phonemeOneData.imagen);
  }  

}
