import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Student } from '../../../../../models/student';
import { User } from '../../../../../models/user';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  @Input() student: Student;
  @Input() user: User;

  renderer = false;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    document.getElementById("nombre").setAttribute("value", ((this.student.nombre.toString() != 'none') ? this.student.nombre.toString() : ""));
    document.getElementById("cedula").setAttribute("value", ((this.student.cedula.toString() != 'none') ? this.student.cedula.toString() : ""));
    document.getElementById("sexo").setAttribute("value", ((this.student.sexo.toString() != 'none') ? this.student.sexo.toString() : ""));
    document.getElementById("edad").setAttribute("value", this.student.edad.toString());
    document.getElementById("encargado_nombre").setAttribute("value", ((this.student.encargadoLegal.nombre.toString() != 'none') ? this.student.encargadoLegal.nombre.toString() : ""));
    document.getElementById("encargado_profesion").setAttribute("value", ((this.student.encargadoLegal.profesion.toString() != 'none') ? this.student.encargadoLegal.profesion.toString() : ""));
    document.getElementById("encargado_telefono").setAttribute("value", ((this.student.encargadoLegal.telefono.toString() != 'none') ? this.student.encargadoLegal.telefono.toString() : ""));
    document.getElementById("encargado_direccion").setAttribute("value", ((this.student.encargadoLegal.direccion.toString() != 'none') ? this.student.encargadoLegal.direccion.toString() : ""));

    document.getElementById("email").setAttribute("value", ((this.user.email != 'none') ? this.user.email.toString() : ""));
  }
}
