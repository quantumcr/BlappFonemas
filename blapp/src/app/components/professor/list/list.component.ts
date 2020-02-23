import { Component, OnInit, Input } from '@angular/core';

import { StudentService, NameStudents } from '../../../services/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() nombre: string;

  nameStudents: NameStudents;

  constructor(
    private studentService: StudentService
  ) { }
  
  ngOnInit() {
    this.studentService.getNameStudents()
    .then((nameStudent: NameStudents) => {
      this.nameStudents = nameStudent;
    })
    .catch(err => {
      console.log(err);
    });
  }

  getStudent(_id: String) {
    console.log(_id);
  }
}
