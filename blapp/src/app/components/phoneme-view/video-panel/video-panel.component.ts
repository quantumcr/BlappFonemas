import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-panel',
  templateUrl: './video-panel.component.html',
  styleUrls: ['./video-panel.component.scss'],
})
export class VideoPanelComponent implements OnInit {
  @Input() video: string ;
  constructor() { }

  ngOnInit() {}

}
