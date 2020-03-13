import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories-view',
  templateUrl: './categories-view.component.html',
  styleUrls: ['./categories-view.component.scss'],
})
export class CategoriesViewComponent implements OnInit {
  @Input() valueSubCategoriaView: string;
  @Input() valueCategoriaView: string;
  comandoFonema: string;
  constructor() { }

  ngOnInit() {}

  selectPanel(event: any) {}

}
