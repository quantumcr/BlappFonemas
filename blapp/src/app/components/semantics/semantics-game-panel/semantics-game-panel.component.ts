import { Component, OnInit, Input} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import { SUBCATEGORIAS, OneDataI } from '../../../../data/categorias/data.subcategorias';

@Component({
  selector: 'app-semantics-game-panel',
  templateUrl: './semantics-game-panel.component.html',
  styleUrls: ['./semantics-game-panel.component.scss'],
})
export class SemanticsGamePanelComponent implements OnInit {
  @Input() subcategoryOneData: OneDataI;
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];
  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];
  same = ['correr'];

  subcategoria = [];
  sujeto = [];
  verbo = [];
  predicado = [];
  imagenes = [];

  all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  even = ['hola'];
  odd = [11];

  

  constructor() {
  }

  ngOnInit() {
    this.imagenes = [];
    this.getImagenes();

  }


  getImagenes() {
    console.log(this.subcategoryOneData);
    this.imagenes.push(this.subcategoryOneData.imagenSujeto);
    console.log(this.subcategoryOneData.imagenPredicado.substring(22, 32));
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

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  evenPredicate(item: CdkDrag<number>) {
    return item.data % 2 === 0;
  }

  oddPredicate(item: CdkDrag<number>) {
    return item.data % 2 === 1;
  }

  noReturnPredicate() {
    return false;
  }

  validarSujeto(item: CdkDrag<string>) {
    return item.data.substring(33, 39 ) === 'sujeto';
  }
  validarVerbo(item: CdkDrag<string>) {
    return item.data.substring(33, 38 ) === 'verbo';
  }
  validarPredicado(item: CdkDrag<string>) {
    return item.data.substring(22, 32 ) === 'categorias';
  }
}
