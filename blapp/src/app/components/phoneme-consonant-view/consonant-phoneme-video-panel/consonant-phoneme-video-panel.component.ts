import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-consonant-phoneme-video-panel',
  templateUrl: './consonant-phoneme-video-panel.component.html',
  styleUrls: ['./consonant-phoneme-video-panel.component.scss'],
})
export class ConsonantPhonemeVideoPanelComponent implements OnInit {
  @Input() video: string ;
  constructor() { }

  ngOnInit() {}

}
