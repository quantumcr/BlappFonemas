import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss'],
})
export class StudentInfoComponent implements OnInit {
  @Input() _idStudent: string;  

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {
  
  }

  ngOnInit() {
    
  }

  deleteStudent() {
    this.studentService.putDisableStudent(this._idStudent)
    .then(message => {
      window.open('/docentes', '_self');
    })
    .catch(err => {
      console.log(err);
    });
  }
}
