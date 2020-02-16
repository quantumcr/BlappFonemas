import { Component, OnInit } from '@angular/core';
import { Audio } from '../../../interfaces/audio';
@Component({
  selector: 'app-phoneme-game-panel',
  templateUrl: './phoneme-game-panel.component.html',
  styleUrls: ['./phoneme-game-panel.component.scss'],
})
export class PhonemeGamePanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  playAudio(event: any) {
    console.log(event.target.value);
  }

  play(audio: Audio) {


}
}
