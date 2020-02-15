import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-professor-menu',
  templateUrl: './professor-menu.component.html',
  styleUrls: ['./professor-menu.component.scss'],
})
export class ProfessorMenuComponent implements OnInit {
  @Input() titulo: string;
  @Input() opcion1: string;
  @Input() opcion2: string;
  @Input() opcion3: string;
  constructor() { }

  ngOnInit() {}
  selectTheme(event: any){
    console.log(event.target.value);
  }
}
