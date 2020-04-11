import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { SUBCATEGORIAS, SubcategoryI, OneDataI } from '../../../../data/categorias/data.subcategorias';
import { CategoriaI } from '../../../../data/categorias/data.categorias';
import {AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-categories-view-panel',
  templateUrl: './categories-view-panel.component.html',
  styleUrls: ['./categories-view-panel.component.scss'],
})
export class CategoriesViewPanelComponent implements OnInit {
  @Input() subcategoryOneData: OneDataI;

  ejemplos = [];
  cantidadEjemplos: number;
  @Input() subcategoria: string;
  @Input() sujeto: string;
  @Input() verbo: string;
  @Input() predicado: string;

  @Input() imagenSujeto: string;
  @Input() imagenVerbo: string;
  @Input() imagenPredicado: string;

  constructor(private animationCtrl: AnimationController) {
  }



  async ngOnInit() {
    this.animacionSujeto();

  }
  async animacionSujeto() {
    const animationS = this.animationCtrl.create()
    .addElement(document.querySelector('.star'))
    .duration(1900)
    // .iterations(Infinity)
    .keyframes([
      { offset: 0, transform: 'scale(1) rotate(0)' },
      { offset: 0.5, transform: 'scale(1.5) rotate(90deg)' },
      { offset: 1, transform: 'scale(1) rotate(90deg)' }
    ]);

    const animationV = this.animationCtrl.create()
    .addElement(document.querySelector('.star2'))
    .duration(1900)
    // .iterations(Infinity)
    .keyframes([
      { offset: 0, transform: 'scale(1) rotate(0)' },
      { offset: 0.5, transform: 'scale(1.5) rotate(90deg)' },
      { offset: 1, transform: 'scale(1) rotate(90deg)' }
    ]);

    const animationP = this.animationCtrl.create()
    .addElement(document.querySelector('.star3'))
    .duration(1900)
    // .iterations(Infinity)
    .keyframes([
      { offset: 0, transform: 'scale(1) rotate(0)' },
      { offset: 0.5, transform: 'scale(1.5) rotate(90deg)' },
      { offset: 1, transform: 'scale(1) rotate(90deg)' }
    ]);
    await animationS.play();
    await animationV.play();
    await animationP.play();
  }

  /*
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

  getSubcategorySelect(subcategoryNameSelected: string): SubcategoryI {
    subcategoryNameSelected = subcategoryNameSelected.toLowerCase();
    for (let i = 0; i < SUBCATEGORIAS.length; i++) {  
      if (SUBCATEGORIAS[i].nombre.toUpperCase() == subcategoryNameSelected) {
        return SUBCATEGORIAS[i] as unknown as SubcategoryI;
      }
    }
  }
  */

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.subcategoryOneData);
    document.getElementById("sujeto").setAttribute('src', this.subcategoryOneData.imagenSujeto);
    document.getElementById("verbo").setAttribute('src', this.subcategoryOneData.imagenVerbo);
    document.getElementById("predicado").setAttribute('src', this.subcategoryOneData.imagenPredicado);
    this.animacionSujeto();
  }


  onload() {}
}