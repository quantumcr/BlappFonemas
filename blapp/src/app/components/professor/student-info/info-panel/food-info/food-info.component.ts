import { Component, OnInit, Input } from '@angular/core';
import { Alimentos } from '../../../../../models/student';

@Component({
  selector: 'app-food-info',
  templateUrl: './food-info.component.html',
  styleUrls: ['./food-info.component.scss'],
})
export class FoodInfoComponent implements OnInit {
  @Input() alimetacion: Alimentos[];

  constructor() { }

  ngOnInit() {
    console.log(this.alimetacion);
  }

  changeSelected(alimento: Alimentos) {    
    alimento.seleccionado = ((alimento.seleccionado == true) ? false : true);
    console.log(this.alimetacion);
  }

}
