import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-phoneme-game-panel',
  templateUrl: './phoneme-game-panel.component.html',
  styleUrls: ['./phoneme-game-panel.component.scss'],
})
export class PhonemeGamePanelComponent implements OnInit {
  audio = new Audio();
  constructor() { }

  ngOnInit() {}

  playAudio(event: any) {
    this.audio.src = 'assets/audio/Mama.mp3';
    this.audio.load();
    this.audio.play();
    console.log(event.target.value);
  }

}
