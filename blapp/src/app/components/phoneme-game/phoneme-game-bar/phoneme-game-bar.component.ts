import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phoneme-game-bar',
  templateUrl: './phoneme-game-bar.component.html',
  styleUrls: ['./phoneme-game-bar.component.scss'],
})
export class PhonemeGameBarComponent implements OnInit {
  @Input() fonema: string;
  @Input() imagen: string;
  constructor() { }

  ngOnInit() {}

}
