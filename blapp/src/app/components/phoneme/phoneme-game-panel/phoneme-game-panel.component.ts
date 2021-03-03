import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import { CONSONANTES, OneDataPhonemeConsonantI, OneDataSPhonemeConsonantI, PhonemeConsonantI, PhonemeGameI, SilabasI } from '../../../../data/audio/fonemas/consonantes/data.consonantes';
import {AlertController} from '@ionic/angular';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-phoneme-game-panel',
  templateUrl: './phoneme-game-panel.component.html',
  styleUrls: ['./phoneme-game-panel.component.scss'],
})
export class PhonemeGamePanelComponent implements OnInit {
  @Input() dataSPhonemeConsonant: SilabasI;
  @Input() oneDataPhonemeConsonant: OneDataPhonemeConsonantI;

  // audio = new Audio();
  silabaA: []=[];
  silabaB: []=[];

  valueSilabaA: string = '';
  valueSilabaB: string = '';


  public pruebaA:any =[];
  public pruebaB:any =[];
  public pruebaPalabrasJuego: string[]=[];
  // palabras = [];
  silabas = [];
  palabrasJuego = [];
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
    this.silabas = [];
    this.palabrasJuego = [];
    this.getPalabras();
    this.getEjemplos();
    //this.getSilabas();
    console.log(this.dataSPhonemeConsonant);
  }
  validateToken(token: string){
    return token;
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
      //const value = this.getRandomInt(0, CONSONANTES.length);
      //const value2 = CONSONANTES[value].dataS[this.getRandomInt(0, 5)];
      const value2 = this.dataSPhonemeConsonant[this.getRandomInt(0, 5)] as OneDataSPhonemeConsonantI ;
      this.pruebaA.push(value2.nombre);
      this.valueSilabaA = value2.nombre as string;
      this.silabas.push(value2);
    }
  }
  getEjemplos() { // Este método selecciona las palabras del juego y las carga en los componentes de interfaz
    for (let i = 0; i < 3; i++) {  // Seleciona aleatoriamente las 3 palabras del arreglo palabras
      const nuevaPalabara = this.silabas[i].data[this.getRandomInt(0, this.silabas[i].data.length)] as OneDataPhonemeConsonantI;
      this.palabrasJuego.push(nuevaPalabara);
      this.pruebaB.push(nuevaPalabara);
      this.pruebaPalabrasJuego.push(nuevaPalabara.imagen);
    }
  }
  // Obtiene las silabas para el juego
  getSilabas() {

    //this.silaba1 = this.palabrasJuego[0].silaba; // Las silabas salen de la data de palabras
    //this.silaba2 = this.palabrasJuego[1].silaba;
  }

  validarSilabaA(item: CdkDrag<string>) {
    console.log(item.data.includes(this.valueSilabaA));
    console.log(item.data);

    //const val1 = this.validateToken(this.pruebaA[0]);
    //return item.data.includes(this.pruebaA[0]);
    //console.log(item.data);
    //console.log('Esta es la silaba de la palabra');
    //console.log(item.data.silaba);
    //console.log('Esta es la silaba Para validar');
    // console.log(JSON.parse(this.silabas[0]));
    //console.log('Mi tipo de dato con type of es');
    //console.log(typeof this.silabas);
    //const a = this.silabas as undefined as OneDataSPhonemeConsonantI[];
    //if (typeof this.pruebaA === 'undefined' ) {
      //console.log('Mi nuevo');
      //console.log(typeof this.dataSPhonemeConsonant);
      //return item.data.silaba === this.silabas[0].nombre;
      //console.log(typeof this.pruebaA[0]);
      return 0 === 0;
    //
  //}
}
  


  validarSilabaB(item: CdkDrag<string>) {

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
