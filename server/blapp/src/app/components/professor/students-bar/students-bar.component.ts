import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-students-bar',
  templateUrl: './students-bar.component.html',
  styleUrls: ['./students-bar.component.scss'],
})
export class StudentsBarComponent implements OnInit {
  @Input() titulo: string;
  @Input() comando1: string;
  @Input() comando2: string;
  @Output() studentsBarEvent = new EventEmitter();
  
  constructor() {}

  ngOnInit() {}
  
  openPanel(event: any) {
    console.log(event.target.value);
    this.studentsBarEvent.emit(event.target.value);
  }

}
