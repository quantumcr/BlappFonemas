import { Component, OnInit, Input} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { SUBCATEGORIAS } from '../../../../data/categorias/data.subcategorias';
@Component({
  selector: 'app-semantics-game-panel',
  templateUrl: './semantics-game-panel.component.html',
  styleUrls: ['./semantics-game-panel.component.scss'],
})
export class SemanticsGamePanelComponent implements OnInit {
  // shuffle = require('shuffle-array');
  subcategoria = [];
  areaSujeto = [];
  areaVerbo = [];
  areaPredicado = [];
  @Input() sujeto: string;
  @Input() verbo: string;
  @Input() predicado: string;

  @Input() imagen1: string;
  @Input() imagen2: string;
  @Input() imagen3: string;
  imagenes = [];
  constructor() {
  }

  ngOnInit() {
    this.getSubcategoria();
    this.sujeto = this.subcategoria[0].sujeto;
    this.verbo = this.subcategoria[0].verbo;
    this.predicado = this.subcategoria[0].predicado;
    this.getImagenes(0);
    this.imagen1 = this.imagenes[0];
    this.imagen2 = this.imagenes[1];
    this.imagen3 = this.imagenes[2];
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  getSubcategoria() {
    this.subcategoria = SUBCATEGORIAS[this.getRandomInt(0, SUBCATEGORIAS.length)].data;
  }
  getImagenes(value: number) {
    this.imagenes.push(this.subcategoria[value].imagenSujeto);
    this.imagenes.push(this.subcategoria[value].imagenVerbo);
    this.imagenes.push(this.subcategoria[value].imagenPredicado);
    // this.shuffle(this.imagenes);
  }

}
