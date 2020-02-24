import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {
  @Input() fonema: string;
  @Input() mensaje: string;
  @Output() barEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {}
  openPanel(event: any) {
    console.log(event.target.value);
    this.barEvent.emit(event.target.value);
  }

  playVideo() {}

}
