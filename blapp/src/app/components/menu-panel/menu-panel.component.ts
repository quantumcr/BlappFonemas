import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss'],
})
export class MenuPanelComponent implements OnInit {
  @Input() titulo: string;
  @Input() opcion1: string;
  @Input() opcion2: string;
  constructor() { }

  ngOnInit() {}

}
