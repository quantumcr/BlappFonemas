import { Component, OnInit, Input} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import { SUBCATEGORIAS, OneDataI } from '../../../../data/categorias/data.subcategorias';
import {SONIDOS, CategoriesSoundI, OneDataCategoriesSoundI} from '../../../../data/audio/semanticas/data.sonidos';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-semantics-game-panel',
  templateUrl: './semantics-game-panel.component.html',
  styleUrls: ['./semantics-game-panel.component.scss'],
})
export class SemanticsGamePanelComponent implements OnInit {
  @Input() subcategoryOneData: OneDataI;
  @Input() nombreSubcategoria: string;

  public audio = new Audio();

  subcategoria = [];
  sujeto = [];
  verbo = [];
  predicado = [];
  imagenes = [];
  sonidos =[];
  nuevaVariable='sujeto';
  

  constructor(
    private alertController: AlertController
  ) {
  }

  ngOnInit() {
    this.imagenes = [];
    this.getImagenes();
  }

   aciertoJuego(){
  }


  getImagenes() {
    console.log(this.subcategoryOneData);
    this.imagenes.push(this.subcategoryOneData.imagenSujeto);
    this.imagenes.push(this.subcategoryOneData.imagenVerbo);
    this.imagenes.push(this.subcategoryOneData.imagenPredicado);
    this.audio.src = this.subcategoryOneData.audio;
    this.audio.load();
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
    this.revision();
    this.imagenes = [];
    this.getImagenes();
    // console.log(this.imagenes[0], this.imagenes[1], this.imagenes[2]);
  }
  revision() {
    if (this.imagenes.length === 0) {
      this.sujeto = [];
      this.verbo = [];
      this.predicado = [];
      this.getImagenes();
    }
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.audio.src = 'assets/audio/notificaciones/error.mp3';
      this.audio.load();
      this.audio.play();
      this.errorAlert();
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      this.audio.src = 'assets/audio/notificaciones/fantastic.mp3';
      this.audio.load();
      this.audio.play();
      this.presentAlert();
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
  playSound(){};


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'fantastic',
      header: '',
      subHeader: '',
      message: '',
      buttons: ['OK']
    });

    await alert.present();
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'try',
      header: '         ',
      subHeader: '        ',
      message: '          ',
      buttons: ['OK']
    });

    await alert.present();
  }
}
