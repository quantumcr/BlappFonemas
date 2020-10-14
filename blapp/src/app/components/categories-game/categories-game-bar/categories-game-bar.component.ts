import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoriaI } from '../../../../data/categorias/data.categorias';
@Component({
  selector: 'app-categories-game-bar',
  templateUrl: './categories-game-bar.component.html',
  styleUrls: ['./categories-game-bar.component.scss'],
})
export class CategoriesGameBarComponent implements OnInit {
  @Input() category: CategoriaI;
  @Output() subcategoryEmit: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {}

  subcategorySelected(subcategoryName: string) {
    this.subcategoryEmit.emit(subcategoryName);
  }

}
