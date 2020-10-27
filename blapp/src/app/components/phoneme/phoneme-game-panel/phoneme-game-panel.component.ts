import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import { CONSONANTES, OneDataPhonemeConsonantI, OneDataSPhonemeConsonantI } from '../../../../data/audio/fonemas/consonantes/data.consonantes';

import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-phoneme-game-panel',
  templateUrl: './phoneme-game-panel.component.html',
  styleUrls: ['./phoneme-game-panel.component.scss'],
})
export class PhonemeGamePanelComponent implements OnInit {
  // audio = new Audio();
  silabaA = [];
  silabaB = [];
  silabaC = [];
  // palabras = [];
  silabas = new Array();
  palabrasJuego: any[] =[];
  @Input() silaba1: string;
  @Input() silaba2: string;

  // @Input() palabra1;
  // @Input() palabra2;
  // @Input() palabra3;
  constructor(private alertController: AlertController) {
    this.silabas = [];
    this.palabrasJuego =[];
  }
  ngOnInit() {
    this.silabas =[];
    this.palabrasJuego = [];
    this.getPalabras();
    this.getEjemplos();
    //this.getSilabas();
  }

  playAudio(event: any) {
    // this.audio.src = event.target.value;
    // this.audio.load();
    // this.audio.play();
    console.log(event.target.value);
  }
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  getPalabras() {
    for (let i = 0; i < 3; i++) {
      const value = this.getRandomInt(0, CONSONANTES.length);
      console.log(CONSONANTES[value].consonante);
      const value2 = CONSONANTES[value].dataS[this.getRandomInt(0, 5)];
      this.silabas.push(value2);
      //console.log(this.silabas);
    }


  }
  getEjemplos() { // Este método selecciona las palabras del juego y las carga en los componentes de interfaz
    for (let i = 0; i < 3; i++) {  // Seleciona aleatoriamente las 3 palabras del arreglo palabras
      this.palabrasJuego.push(this.silabas[i].data[this.getRandomInt(0, this.silabas[i].data.length)]);
    }
    console.log('Estas son las palabras del juego');
    console.log(this.palabrasJuego);
  }
  // Obtiene las silabas para el juego
  getSilabas() {

    //this.silaba1 = this.palabrasJuego[0].silaba; // Las silabas salen de la data de palabras
    //this.silaba2 = this.palabrasJuego[1].silaba;
  }

  validarSilabaA(item: CdkDrag<OneDataPhonemeConsonantI>) {
    console.log(item.data);
    console.log('Esta es la silaba de la palabra');
    console.log(item.data.silaba);
    console.log('Esta es la silaba Para validar');
    // console.log(JSON.parse(this.silabas[0]));
    if (typeof this.silabas === 'undefined' ) {
      // return item.data.silaba === this.silabas[0].nombre;
      return 0 === 0;
    }
  }
  validarSilabaB(item: CdkDrag<OneDataPhonemeConsonantI>) {
    console.log(item.data);
    console.log('Esta es la silaba de la palabra');
    console.log(item.data.silaba);
    if(typeof this.silabas === 'undefined'){
      // return item.data.silaba === this.silaba2;
      return 0 === 0;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      //this.audio.src = 'assets/audio/notificaciones/error.mp3';
      //this.audio.load();
      //this.audio.play();
      //this.errorAlert();
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      //this.audio.src = 'assets/audio/notificaciones/fantastic.mp3';
      //this.audio.load();
      //this.audio.play();
      this.presentAlert();
    }
  }

  noReturnPredicate() {
    return false;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'fantastic',
      header: '',
      subHeader: '',
      message: '',
      buttons: ['OK']
    });

    await alert.present();
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'try',
      header: '         ',
      subHeader: '        ',
      message: '          ',
      buttons: ['OK']
    });

    await alert.present();
  }


}
