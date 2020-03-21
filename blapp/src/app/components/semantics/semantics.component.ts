import { Component, OnInit } from '@angular/core';
import { SUBCATEGORIAS, SubcategoryI } from '../../../data/categorias/data.subcategorias';

@Component({
  selector: 'app-semantics',
  templateUrl: './semantics.component.html',
  styleUrls: ['./semantics.component.scss'],
})
export class SemanticsComponent implements OnInit {
  public visibleCategories = true;
  public visibleGame = false;

  public indexData: number = 0;
  public subcategory: SubcategoryI;
  
  constructor(

  ) { }

  ngOnInit() {
    
  }

  selectPanel(value: string) {
    this.getSubcategoria();
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

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getSubcategoria() {
    this.subcategory = SUBCATEGORIAS[this.getRandomInt(0, SUBCATEGORIAS.length)] as SubcategoryI;
  }

  incIndexData() {
    if (this.subcategory.data.length - 1 == this.indexData) {
      this.indexData = 0;
    } else {
      this.indexData++;
    }
  }

  decIndexData() {
    if (this.indexData == 0) {
      this.indexData = this.subcategory.data.length - 1;
    } else {
      this.indexData--;
    }
  }

}
