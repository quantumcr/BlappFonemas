import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss'],
})
export class ProfessorComponent implements OnInit {
  public visibleRegister = true;
  public visibleList = false;
  constructor() { }

  ngOnInit() {}

  selectPanel(value: string) {
    console.log(value);
    this.setVisible(value);
  }

  setVisible( value) {
    if ( value === 'agregar') {
      this.visibleRegister = true;
      this.visibleList = false;
    }
    if (value === 'lista') {
      this.visibleRegister = false;
      this.visibleList = true;
    }

  }
}
