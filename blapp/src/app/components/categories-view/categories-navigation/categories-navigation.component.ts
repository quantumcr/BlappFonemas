import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-categories-navigation',
  templateUrl: './categories-navigation.component.html',
  styleUrls: ['./categories-navigation.component.scss'],
})
export class CategoriesNavigationComponent implements OnInit {
  @Output() forwardEmit = new EventEmitter();
  @Output() backEmit = new EventEmitter();

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {

  }
  
  goToHome(event: any) {
    this.navCtrl.navigateForward('/menu');
  }

  forward() {
    this.forwardEmit.emit();
  }

  back(){
    this.backEmit.emit();
  }

}
