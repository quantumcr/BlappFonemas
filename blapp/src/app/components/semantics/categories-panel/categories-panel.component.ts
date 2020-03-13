import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-categories-panel',
  templateUrl: './categories-panel.component.html',
  styleUrls: ['./categories-panel.component.scss'],
})
export class CategoriesPanelComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  goToCategories($event: any) {
    this.navCtrl.navigateForward('/categoria');
  }

}
