import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import { CONSONANTES } from '../../../../data/audio/fonemas/consonantes/data.consonantes';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-phoneme-game-panel',
  templateUrl: './phoneme-game-panel.component.html',
  styleUrls: ['./phoneme-game-panel.component.scss'],
})
export class PhonemeGamePanelComponent implements OnInit {
  audio = new Audio();
  silabaA = [];
  silabaB = [];
  palabras = [];
  silabas = [];
  palabrasJuego = [];
  @Input() silaba1: string;
  @Input() silaba2: string;

  @Input() palabra1;
  @Input() palabra2;
  @Input() palabra3;
  constructor(private alertController: AlertController) { }
  ngOnInit() {
    this.getPalabras();
    this.getEjemplos();
    this.getSilabas();
  }

  playAudio(event: any) {
    this.audio.src = event.target.value;
    this.audio.load();
    this.audio.play();
    console.log(event.target.value);
  }
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  getPalabras() {
    const value = this.getRandomInt(0, CONSONANTES.length);
    this.palabras = CONSONANTES[value].data;
    this.silabas = CONSONANTES[value].dataS;
  }
  getEjemplos() {
    for (let i = 0; i < 3; i++) {
      this.palabrasJuego.push(this.palabras[this.getRandomInt(0, this.palabras.length)]);
    }
    this.palabra1 = this.palabrasJuego[0];
    this.palabra2 = this.palabrasJuego[1];
    this.palabra3 = this.palabrasJuego[2];
  }
  getSilabas() {
    this.silaba1 = this.palabrasJuego[0].silaba;
    this.silaba2 = this.palabrasJuego[1].silaba;
  }

  validarSilaba1(item: CdkDrag<string>) {
    return item.data.substring(33, 39 ) === 'sujeto';
  }
  validarSilaba2(item: CdkDrag<string>) {
    return item.data.substring(33, 39 ) === 'sujeto';
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.audio.src = 'assets/audio/notificaciones/error.mp3';
      this.audio.load();
      this.audio.play();
      this.errorAlert();
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      this.audio.src = 'assets/audio/notificaciones/fantastic.mp3';
      this.audio.load();
      this.audio.play();
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
