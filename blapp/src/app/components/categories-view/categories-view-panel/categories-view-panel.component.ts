import { Component, OnInit, Input } from '@angular/core';
import { SUBCATEGORIAS } from '../../../../data/categorias/data.subcategorias';

@Component({
  selector: 'app-categories-view-panel',
  templateUrl: './categories-view-panel.component.html',
  styleUrls: ['./categories-view-panel.component.scss'],
})
export class CategoriesViewPanelComponent implements OnInit {
  ejemplos = [];
  cantidadEjemplos: number;
  @Input() subcategoria: string;
  @Input() sujeto: string;
  @Input() verbo: string;
  @Input() predicado: string;

  @Input() imagenSujeto: string;
  @Input() imagenVerbo: string;
  @Input() imagenPredicado: string;
  constructor() { }

  ngOnInit() {
    this.getEjemplos('Imagen de mí mismo');
    this.sujeto = this.ejemplos[0].sujeto;
    this.verbo = this.ejemplos[0].verbo;
    this.predicado = this.ejemplos[0].predicado;
    this.cantidadEjemplos = 0;
  }
  nuevoEjemplo(){
    if (this.cantidadEjemplos > this.ejemplos.length){
      this.cantidadEjemplos = 0;
    }
    this.sujeto = this.ejemplos[this.cantidadEjemplos].sujeto;
    this.verbo = this.ejemplos[this.cantidadEjemplos].verbo;
    this.predicado = this.ejemplos[this.cantidadEjemplos].predicado;
    this.imagenSujeto = this.ejemplos[this.cantidadEjemplos].imagenSujeto;
    this.imagenVerbo = this.ejemplos[this.cantidadEjemplos].imagenVerbo;
    this.imagenPredicado = this.ejemplos[this.cantidadEjemplos].imagenPredicado;
    this.cantidadEjemplos ++;
  }

  ejemploAnterior(){
    this.cantidadEjemplos --;
    if (this.cantidadEjemplos < this.ejemplos.length) {
      this.cantidadEjemplos = 0;
    }
    this.sujeto = this.ejemplos[this.cantidadEjemplos].sujeto;
    this.verbo = this.ejemplos[this.cantidadEjemplos].verbo;
    this.predicado = this.ejemplos[this.cantidadEjemplos].predicado;
    this.imagenSujeto = this.ejemplos[this.cantidadEjemplos].imagenSujeto;
    this.imagenVerbo = this.ejemplos[this.cantidadEjemplos].imagenVerbo;
    this.imagenPredicado = this.ejemplos[this.cantidadEjemplos].imagenPredicado;
  }

  getEjemplos(value: string) {
    for(let i = 0; i < SUBCATEGORIAS.length; i++) {
      if (SUBCATEGORIAS[i].nombre === value) {
        this.ejemplos = SUBCATEGORIAS[i].data;
        break;
      }
    }
  }

}
