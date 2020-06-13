import { Component, OnInit, Input } from '@angular/core';
import { CONSONANTES, OneDataSPhonemeConsonantI, OneDataPhonemeConsonantI } from '../../../../data/audio/fonemas/consonantes/data.consonantes';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-consonant-phoneme-panel',
  templateUrl: './consonant-phoneme-panel.component.html',
  styleUrls: ['./consonant-phoneme-panel.component.scss'],
})
export class ConsonantPhonemePanelComponent implements OnInit {
  @Input() dataSPhonemeConsonant: OneDataSPhonemeConsonantI[];
  @Input() oneDataPhonemeConsonant: OneDataPhonemeConsonantI;
  
  public record = new Audio();

  /*
  audios = [];
  silabas = [];
  cantidadAudios: number;
  audio = new Audio();
  @Input() fonema: string;
  @Input() imagen: string;
  @Input() palabra: string;
  */
  @Input() comando: string;
  /*
  @Input() silaba1: string;
  @Input() silaba2: string;
  @Input() silaba3: string;
  @Input() silaba4: string;
  @Input() silaba5: string;
  */

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {        
    /*
    this.getAudios(this.fonema);
    this.getSilabas();
    this.imagen = this.audios[0].imagen;
    this.palabra = this.audios[0].nombre;
    this.cantidadAudios = 0;
    */
  }

  comeBackTo(){
    this.navCtrl.navigateForward('/fonemas');
  }


  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.oneDataPhonemeConsonant);
  }

  /*
  playAudio(event: any) {
    if (this.cantidadAudios == this.audios.length){
      this.cantidadAudios = 0;
    }
    this.palabra=this.audios[this.cantidadAudios].nombre;
    this.imagen= this.audios[this.cantidadAudios].imagen;
    this.audio.src = this.audios[this.cantidadAudios].audio;
    this.audio.load();
    this.audio.play();
    console.log(event.target.value);
    console.log('Soy el audio');
    this.cantidadAudios ++;
    console.log(this.comando);
  }
  */

  playAudioS(index: number) {
    this.record.src = this.dataSPhonemeConsonant[index].audio;
    this.record.load();
    this.record.play();
    /*
    this.audio.src = this.silabas[event.target.value].audio;
    this.audio.load();
    this.audio.play();    
    */
  }

  playRecord() {
    this.record.src = this.oneDataPhonemeConsonant.audio;
    this.record.load();
    this.record.play();
  }

  /*
  getAudios(value: string) {
    for(let i = 0; i < CONSONANTES.length; i++) {
      if (CONSONANTES[i].consonante === value) {
        this.audios = CONSONANTES[i].data;
        this.silabas = CONSONANTES[i].dataS;
        break;
      }
    }
  }
  */

  /*
  getSilabas() {
    this.silaba1 = this.silabas[0].nombre;
    this.silaba2 = this.silabas[1].nombre;
    this.silaba3 = this.silabas[2].nombre;
    this.silaba4 = this.silabas[3].nombre;
    this.silaba5 = this.silabas[4].nombre;
  }
  */
}
