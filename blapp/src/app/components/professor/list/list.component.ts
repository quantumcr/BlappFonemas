import { Component, OnInit } from '@angular/core';

import { StudentService, NameStudents } from '../../../services/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

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

}
