import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

import { EstudiantesPage } from '../../../pages/estudiantes/estudiantes.page';

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
    private studentService: StudentService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.getNameStudents();
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.getNameStudents();
  }

  getNameStudents() {
    this.studentService.getNameStudents()
    .then((nameStudent: NameStudents) => {
      this.nameStudents = nameStudent;
    })
    .catch(err => {
      console.log(err);
    });
  }

  getStudent(_idStudent: String) {
    this.router.navigate(['estudiantes'], { queryParams: { _id: _idStudent } });
  }
}
