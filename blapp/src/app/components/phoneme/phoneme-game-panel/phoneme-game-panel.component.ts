import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
@Component({
  selector: 'app-phoneme-game-panel',
  templateUrl: './phoneme-game-panel.component.html',
  styleUrls: ['./phoneme-game-panel.component.scss'],
})
export class PhonemeGamePanelComponent implements OnInit {
  audio = new Audio();
  constructor(private videoPlayer: VideoPlayer) { }

  ngOnInit() {}

  playAudio(event: any) {
    this.audio.src = 'assets/none.mp3';
    this.audio.load();
    this.audio.play();
    console.log(event.target.value);
  }

}
