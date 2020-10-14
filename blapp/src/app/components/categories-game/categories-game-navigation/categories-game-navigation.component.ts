import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-categories-game-navigation',
  templateUrl: './categories-game-navigation.component.html',
  styleUrls: ['./categories-game-navigation.component.scss'],
})
export class CategoriesGameNavigationComponent implements OnInit {
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

  forward(event: any) {
    this.forwardEmit.emit();
  }

  back(event: any){
    this.backEmit.emit();
  }
}
