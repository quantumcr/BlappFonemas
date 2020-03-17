import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semantics',
  templateUrl: './semantics.component.html',
  styleUrls: ['./semantics.component.scss'],
})
export class SemanticsComponent implements OnInit {
  public visibleCategories = true;
  public visibleGame = false;
  
  constructor(

  ) { }

  ngOnInit() {
    
  }

  selectPanel(value: string) {
    console.log(value);
    this.setVisible(value);
  }

  setVisible( value) {
    if ( value === 'categorias') {
      this.visibleCategories = true;
      this.visibleGame = false;
    }
    if (value === 'jugar') {
      this.visibleCategories = false;
      this.visibleGame = true;
    }

  }

}
