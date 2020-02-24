import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-phoneme-panel',
  templateUrl: './phoneme-panel.component.html',
  styleUrls: ['./phoneme-panel.component.scss'],
})
export class PhonemePanelComponent implements OnInit {
  audio = new Audio();
  constructor() { }

  ngOnInit() {}
  playAudio(event: any) {
    this.audio.src = 'assets/audio/Mama.mp3';
    this.audio.load();
    this.audio.play();
    console.log(event.target.value);
    console.log('Soy el audio');
  }
}
