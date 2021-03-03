import { Component, OnInit } from '@angular/core';
import { CONSONANTES, PhonemeConsonantI, PhonemeGameI } from 'src/data/audio/fonemas/consonantes/data.consonantes';
import { Router } from '@angular/router';
@Component({
  selector: 'app-consonant-game-panel',
  templateUrl: './consonant-game-panel.component.html',
  styleUrls: ['./consonant-game-panel.component.scss'],
})
export class ConsonantGamePanelComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {}

    // Nuevo Componente Panel de Juegos

    goToPhonemeGame(phonemeConsonantNameSelected: string): void {
      let phonemeConsonantData: PhonemeGameI = this.getPhonemeConsonant(phonemeConsonantNameSelected);
      this.route.navigate(['/juego-fonemas'], { queryParams: { phoneme: JSON.stringify(phonemeConsonantData) }});
    }
  
    getPhonemeConsonant(phonemeConsonanName: string): PhonemeGameI {
      phonemeConsonanName = phonemeConsonanName.toUpperCase();
      for (let i = 0; i < CONSONANTES.length; i++) {
        if (CONSONANTES[i].consonante.toUpperCase() == phonemeConsonanName) {
          return CONSONANTES[i] as unknown as PhonemeGameI;
        }
      }
    }

}
