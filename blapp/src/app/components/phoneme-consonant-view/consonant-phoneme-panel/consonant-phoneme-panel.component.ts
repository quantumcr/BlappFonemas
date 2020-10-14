import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CONSONANTES, OneDataSPhonemeConsonantI, OneDataPhonemeConsonantI } from '../../../../data/audio/fonemas/consonantes/data.consonantes';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-consonant-phoneme-panel',
  templateUrl: './consonant-phoneme-panel.component.html',
  styleUrls: ['./consonant-phoneme-panel.component.scss'],
})
export class ConsonantPhonemePanelComponent implements OnInit {
  @Input() dataSPhonemeConsonant: OneDataSPhonemeConsonantI[];
  @Input() oneDataPhonemeConsonant: OneDataPhonemeConsonantI;
  @Output()phonemePanelEvent = new EventEmitter();
  public record = new Audio();
  @Input() comando: string;

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {

  }

  comeBackTo() {
    this.navCtrl.navigateForward('/fonemas');
  }


  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.oneDataPhonemeConsonant);
  }



  playAudioS(index: number) {
    this.phonemePanelEvent.emit(index);
    this.record.src = this.dataSPhonemeConsonant[index].audio;
    this.record.load();
    this.record.play();
    this.oneDataPhonemeConsonant=this.dataSPhonemeConsonant[index].data[0];

  }

  playRecord() {
    this.record.src = this.oneDataPhonemeConsonant.audio;
    this.record.load();
    this.record.play();
  }


}
