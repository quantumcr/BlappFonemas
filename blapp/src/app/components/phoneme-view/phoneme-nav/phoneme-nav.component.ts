import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-phoneme-nav',
  templateUrl: './phoneme-nav.component.html',
  styleUrls: ['./phoneme-nav.component.scss'],
})
export class PhonemeNavComponent implements OnInit {
  @Output() forwardEmit = new EventEmitter();
  @Output() backEmit = new EventEmitter();
  //@Output() navigationEvent = new EventEmitter();
  
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
