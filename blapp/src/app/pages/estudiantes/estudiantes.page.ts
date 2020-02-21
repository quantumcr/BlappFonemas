import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.page.html',
  styleUrls: ['./estudiantes.page.scss'],
})
export class EstudiantesPage implements OnInit {

  _idStudent: string;

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.queryParams.subscribe(params => {
      this._idStudent = params["_id"];
    });
  }

  ngOnInit() {
  }

}
