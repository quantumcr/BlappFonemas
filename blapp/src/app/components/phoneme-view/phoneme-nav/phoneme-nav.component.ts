import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-phoneme-nav',
  templateUrl: './phoneme-nav.component.html',
  styleUrls: ['./phoneme-nav.component.scss'],
})
export class PhonemeNavComponent implements OnInit {
  @Output() navigationEvent = new EventEmitter();
  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  goToHome(event: any) {
    this.navCtrl.navigateForward('/menu');
  }
  forward(event: any) {
    this.navigationEvent.emit(event.target.value);
  }
  back(event: any) {
    this.navigationEvent.emit(event.target.value);
  }
}
