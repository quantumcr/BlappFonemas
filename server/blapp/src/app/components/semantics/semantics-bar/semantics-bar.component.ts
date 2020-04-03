import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-semantics-bar',
  templateUrl: './semantics-bar.component.html',
  styleUrls: ['./semantics-bar.component.scss'],
})
export class SemanticsBarComponent implements OnInit {
  @Input() titulo: string;
  @Input() titulo2: string;
  @Input() comando1: string;
  @Input() comando2: string;
  @Input() comando3: string;
  @Output() semanticsBarEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {}
  openPanel(event: any) {
    console.log(event.target.value);
    this.semanticsBarEvent.emit(event.target.value);
  }

}
