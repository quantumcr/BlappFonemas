import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories-bar',
  templateUrl: './categories-bar.component.html',
  styleUrls: ['./categories-bar.component.scss'],
})
export class CategoriesBarComponent implements OnInit {
  @Input() titulo: string;
  @Input() imagen: string;
  @Input() comando1: string;
  @Input() comando2: string;
  @Input() comando3: string;
  @Output() semanticsBarEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  openPanel(event: any) {

  }

}
