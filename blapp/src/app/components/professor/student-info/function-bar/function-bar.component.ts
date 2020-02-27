import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-function-bar',
  templateUrl: './function-bar.component.html',
  styleUrls: ['./function-bar.component.scss'],
})
export class FunctionBarComponent implements OnInit {
  @Input() titulo: string;
  @Input() comando1: string;
  @Input() comando2: string;
  @Output() functionBarEvent = new EventEmitter();
  @Output() deleteStudentEvent = new EventEmitter();
  @Output() updateStudentEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  openPanel(event: any) {
    console.log(event.target.value);
    this.functionBarEvent.emit(event.target.value);
  }

  updateStudent(){
    if (true) {
      this.updateStudentEvent.emit();
    }
  }

  deleteStudent() {
    if (true) { 
      this.deleteStudentEvent.emit();
    }
  }

}
