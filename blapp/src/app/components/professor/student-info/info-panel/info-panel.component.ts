import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../../../../services/student.service';
import { Student } from '../../../../models/student';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss'],
})
export class InfoPanelComponent implements OnInit {
  @Input() _idStudent: string;

  student = new Student;
  user = new User;

  constructor(
    private studentService: StudentService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.studentService.getStudent(this._idStudent).
    then((student: Student) => {
      this.student = student;
      this.userService.getUserByIdStudent(student._id)
      .then((user: User) => {
        this.user = user;        
      })
      .catch(err => {
        console.log(err);
      });
    })
    .catch(err => {
      console.log(err);
    });    
  }
}
