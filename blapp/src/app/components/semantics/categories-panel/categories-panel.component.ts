import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CATEGORIAS, CategoriaI } from '../../../../data/categorias/data.categorias';

@Component({
  selector: 'app-categories-panel',
  templateUrl: './categories-panel.component.html',
  styleUrls: ['./categories-panel.component.scss'],
})
export class CategoriesPanelComponent implements OnInit {

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {

  }

  goToCategories(value: string) {
    let categoryData: CategoriaI = this.getCategory(value);
    this.router.navigate(['/categoria'], { queryParams: { category: JSON.stringify(categoryData) }});
    //this.navCtrl.navigateForward('/categoria', true, );
  }

  getCategory(categoryName: string): CategoriaI {
    categoryName = categoryName.toUpperCase();
    for (let i = 0; i < CATEGORIAS.length; i++) {
      if (CATEGORIAS[i].nombre.toUpperCase() == categoryName) {
        return CATEGORIAS[i] as unknown as CategoriaI;
      }      
    }
  }

}
