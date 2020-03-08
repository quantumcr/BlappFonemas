import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories-view-panel',
  templateUrl: './categories-view-panel.component.html',
  styleUrls: ['./categories-view-panel.component.scss'],
})
export class CategoriesViewPanelComponent implements OnInit {
  @Input() sujeto: string;
  @Input() verbo: string;
  @Input() predicado: string;
  constructor() { }

  ngOnInit() {}

}
