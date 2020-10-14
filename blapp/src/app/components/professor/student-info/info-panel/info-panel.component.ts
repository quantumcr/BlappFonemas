import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../../../../services/student.service';
import { Student, Alimentos } from '../../../../models/student';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss'],
})
export class InfoPanelComponent implements OnInit {
  @Input() _idStudent: string;
  @Input() boolEdit: Boolean;

  public student = new Student();
  public user = new User();

  constructor(
    private studentService: StudentService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.studentService.getStudent(this._idStudent).subscribe(myStudent => {
      this.student = myStudent as Student;
      //console.log(this.student);
    });
    /*this.studentService.getStudent(this._idStudent).
    then((student: Student) => {
      this.student = student;
      console.log(student);
      this.userService.getUserByIdStudent(student._id)
      .then((user: User) => {
        this.user = user;
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
    })
    .catch(err => {
      console.log(err);
    });*/
  }

  prueba(){
    console.log(this.student);
  }

  changeSelected(alimento: Alimentos) {    
    alimento.seleccionado = ((alimento.seleccionado == true) ? false : true);    
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    //console.log(this.student, this.user);
    if (this.boolEdit) {
      this.student._id=this._idStudent;
      this.studentService.updateStudent(this.student).then(res => {}).catch(err => console.log(err));
      /*
      this.studentService.putStudent(this.student).then(message => {
        console.log(message);
        this.userService.putUser(this.user).then(message => {
          console.log(message);
          window.open("/docentes", "_self");
        }).catch(err => {
          console.log(err);
        });
      }).catch(err => {
        console.log(err);
      });*/
    }
  }

  updateInfo(){
    if (this.boolEdit) {
      this.studentService.updateStudent(this.student).then(res => {}).catch(err => console.log(err));
    }
  }
}
