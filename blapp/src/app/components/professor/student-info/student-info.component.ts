import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss'],
})
export class StudentInfoComponent implements OnInit {
  @Input() _idStudent: string;

  constructor() { }

  ngOnInit() {
    console.log(this._idStudent);
  }

}
