import { Component, OnInit, Input} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { SUBCATEGORIAS, OneDataI } from '../../../../data/categorias/data.subcategorias';

@Component({
  selector: 'app-semantics-game-panel',
  templateUrl: './semantics-game-panel.component.html',
  styleUrls: ['./semantics-game-panel.component.scss'],
})
export class SemanticsGamePanelComponent implements OnInit {
  @Input() subcategoryOneData: OneDataI;
  subcategoria = [];
  q1 = [];
  q2 = [];
  q3 = [];
  imagenes = [];

  constructor() {
  }

  ngOnInit() {
    this.imagenes = [];
    this.getImagenes();

  }


  getImagenes() {
    console.log(this.subcategoryOneData);
    this.imagenes.push(this.subcategoryOneData.imagenSujeto);
    this.imagenes.push(this.subcategoryOneData.imagenVerbo);
    this.imagenes.push(this.subcategoryOneData.imagenPredicado);
    this.shuffleMethod();
  }

  public shuffleMethod(): void {
    const length = this.imagenes == null ? 0 : this.imagenes.length;
    if (!length) {
      this.imagenes = [];
    }
    let index = -1;
    const lastIndex = length - 1;
    const result = [...this.imagenes];
    while (++index < length) {
      const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
      const value = result[rand];
      result[rand] = result[index];
      result[index] = value;
    }
    this.imagenes = result;
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.imagenes = [];
    this.getImagenes();
    console.log(this.imagenes[0], this.imagenes[1], this.imagenes[2]);
  }
}
