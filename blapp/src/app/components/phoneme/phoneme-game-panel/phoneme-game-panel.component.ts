import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { CONSONANTES } from '../../../../data/audio/fonemas/consonantes/data.consonantes';
@Component({
  selector: 'app-phoneme-game-panel',
  templateUrl: './phoneme-game-panel.component.html',
  styleUrls: ['./phoneme-game-panel.component.scss'],
})
export class PhonemeGamePanelComponent implements OnInit {
  audio = new Audio();
  palabras = [];
  silabas = [];
  palabrasJuego = [];
  @Input() silaba1: string;
  @Input() silaba2: string;

  constructor() { }
  ngOnInit() {
    this.getPalabras();
    this.getEjemplos();
  }

  playAudio(event: any) {
    this.audio.src = 'assets/audio/Mama.mp3';
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

  }
  getEjemplos() {

  }

}
