import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Input() nombre: string;
  @Input() edad: string;
  @Input() genero: string;
  @Input() residencia: string;
  @Input() encargado: string;
  @Input() comando: string;
  constructor() { }

  ngOnInit() {}

}
