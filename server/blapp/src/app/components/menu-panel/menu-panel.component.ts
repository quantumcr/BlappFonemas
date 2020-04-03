import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss'],
})
export class MenuPanelComponent implements OnInit {
  @Input() tipo: Boolean;
  
  @Input() titulo: string;
  @Input() opcion1: string;
  @Input() opcion2: string;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }

}
