import { Component, OnInit, Input } from '@angular/core';
import { CategoriaI } from '../../../data/categorias/data.categorias';
import { SUBCATEGORIAS, SubcategoryI } from '../../../data/categorias/data.subcategorias';

@Component({
  selector: 'app-categories-view',
  templateUrl: './categories-view.component.html',
  styleUrls: ['./categories-view.component.scss'],
})
export class CategoriesViewComponent implements OnInit {
  @Input() category: CategoriaI;
  
  public subcategory: SubcategoryI;
  public indexData: number = 0;  
  
  public comandoFonema: string;

  constructor(

  ) { }

  ngOnInit() {
    //console.log(this.category.subcategoria.length);
    if (this.category.subcategoria.length < 1) {
      //console.log("ELSE");
      //console.log(this.category.nombre);
      this.subcategory = this.getSubcategorySelect(this.category.nombre);
    } else {      
      //console.log("IF");
      //console.log(this.category.subcategoria[0].nombre);
      this.subcategory = this.getSubcategorySelect(this.category.subcategoria[0].nombre);
    }
    //console.log(this.subcategory);
  }  

  selectPanel(event: any) {

  }

  changeSubcategory(subcategoryName: string) {    
    this.subcategory = this.getSubcategorySelect(subcategoryName);
  }

  getSubcategorySelect(subcategoryNameSelected: string): SubcategoryI {
    subcategoryNameSelected = subcategoryNameSelected.toUpperCase();
    for (let i = 0; i < SUBCATEGORIAS.length; i++) {      
      if (SUBCATEGORIAS[i].nombre.toUpperCase() == subcategoryNameSelected) {
        this.indexData = 0;
        return SUBCATEGORIAS[i] as unknown as SubcategoryI;
      }
    }
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

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.category);
  }

}
