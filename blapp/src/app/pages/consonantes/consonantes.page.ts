import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consonantes',
  templateUrl: './consonantes.page.html',
  styleUrls: ['./consonantes.page.scss'],
})
export class ConsonantesPage implements OnInit {
  valueFonema = null;
  mensajeFonema: string;
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.valueFonema = this.activateRoute.snapshot.paramMap.get('value');
    console.log(this.valueFonema);
  }

}
