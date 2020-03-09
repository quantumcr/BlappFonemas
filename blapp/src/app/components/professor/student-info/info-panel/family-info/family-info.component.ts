import { Component, OnInit, Input } from '@angular/core';
import { MiembrosFamilia } from '../../../../../models/student';

@Component({
  selector: 'app-family-info',
  templateUrl: './family-info.component.html',
  styleUrls: ['./family-info.component.scss'],
})
export class FamilyInfoComponent implements OnInit {
  @Input() familia: MiembrosFamilia[];

  constructor() { }

  ngOnInit() {
    console.log(this.familia);
  }

}
