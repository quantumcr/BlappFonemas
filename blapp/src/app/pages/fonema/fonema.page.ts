import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fonema',
  templateUrl: './fonema.page.html',
  styleUrls: ['./fonema.page.scss'],
})
export class FonemaPage implements OnInit {
  valueFonema = null;
  mensajeFonema: string;
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.valueFonema = this.activateRoute.snapshot.paramMap.get('value');
    console.log(this.valueFonema);
  }



}
