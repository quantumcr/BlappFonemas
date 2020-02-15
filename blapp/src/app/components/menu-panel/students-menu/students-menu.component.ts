import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-students-menu',
  templateUrl: './students-menu.component.html',
  styleUrls: ['./students-menu.component.scss'],
})
export class StudentsMenuComponent implements OnInit {
  @Input() titulo: string;
  @Input() opcion1: string;
  @Input() opcion2: string;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}
  selectTheme(event: any) {
    console.log(event.target.value);
    this.navCtrl.navigateForward('/' + event.target.value);
  }

}
