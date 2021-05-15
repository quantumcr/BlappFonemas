import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Output() navigationEvent = new EventEmitter();
  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  goToHome(event: any) {
    this.navCtrl.navigateForward('/menu');
  }
  goTo(event: any) {
    this.navigationEvent.emit(event.target.value);
  }

  goBack(event: any){

  }

}
