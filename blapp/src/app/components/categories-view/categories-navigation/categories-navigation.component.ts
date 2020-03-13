import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-categories-navigation',
  templateUrl: './categories-navigation.component.html',
  styleUrls: ['./categories-navigation.component.scss'],
})
export class CategoriesNavigationComponent implements OnInit {
  @Output() navigationEvent = new EventEmitter();
  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  goToHome(event: any) {
    this.navCtrl.navigateForward('/menu');
  }
  forward(event: any) {
  }
  back(event: any){
  }
}
