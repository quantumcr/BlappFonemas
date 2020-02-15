import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-phoneme-bar',
  templateUrl: './phoneme-bar.component.html',
  styleUrls: ['./phoneme-bar.component.scss'],
})
export class PhonemeBarComponent implements OnInit {
  @Input() titulo: string;
  @Input() comando1: string;
  @Input() comando2: string;
  @Input() comando3: string;
  @Output() phonemeBarEvent = new EventEmitter();
  constructor() { }
  ngOnInit() {}

  openPanel(event: any) {
    console.log(event.target.value);
    this.phonemeBarEvent.emit(event.target.value);
  }

}
