import { Component, OnInit, Input } from '@angular/core';
import { OneDataPhonemeVocalI } from '../../../../data/audio/fonemas/vocales/data.vocales';

@Component({
  selector: 'app-phoneme-panel',
  templateUrl: './phoneme-panel.component.html',
  styleUrls: ['./phoneme-panel.component.scss'],
})
export class PhonemePanelComponent implements OnInit {
  @Input() phonemeOneData: OneDataPhonemeVocalI;
  
  public audio = new Audio();
  //audios = [];
  //cantidadAudios: number;
  //audio = new Audio();
  //@Input() fonema: string;
  //@Input() imagen: string;
  //@Input() palabra: string;
  //@Input() comando: string;

  constructor(

  ) { }

  ngOnInit() {
    this.audio.src = this.phonemeOneData.audio;
    this.audio.load();
    //document.getElementById('imagen').setAttribute('src', this.phonemeOneData.imagen);
    /*
    this.getAudios(this.fonema);
    console.log(this.audios[0].audio);
    this.imagen = this.audios[0].imagen;
    this.palabra = this.audios[0].nombre;
    console.log(this.imagen);
    this.cantidadAudios = 0;
    */
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.audio.src = this.phonemeOneData.audio;
    this.audio.load();
    //document.getElementById('imagen').setAttribute('src', this.phonemeOneData.imagen);
  }  

  /*
  playAudio(event: any) {
    console.log(this.cantidadAudios);
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
  reviewAudio(event: any){
    this.cantidadAudios --;
    if (this.cantidadAudios < this.audios.length){
      this.cantidadAudios = 0;
    }
    this.palabra=this.audios[this.cantidadAudios].nombre
    this.audio.src = this.audios[this.cantidadAudios].audio;
    this.audio.load();
    this.audio.play();
    console.log(event.target.value);
    console.log('Soy el audio');
  }
  getAudios(value: string){
    for(let i = 0; i < VOCALES.length; i++) {
      if (VOCALES[i].vocal === value) {
        this.audios = VOCALES[i].data;
        break;
      }
    }
  }
  */
}
