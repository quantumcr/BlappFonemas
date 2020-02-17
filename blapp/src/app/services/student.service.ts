import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Student } from '../models/student';

export interface NameStudents {
  _id: String;
  nombre: String;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  readonly URL_API = 'http://localhost:3000/api/students';
  
  constructor(
    private http: HttpClient
  ) { }

  createStudent(student: Student) {
    return this.http.post<Student>(this.URL_API, student).toPromise();
  }

  getStudent(_id: String) {
    return this.http.get<Student>(this.URL_API + `/${_id}` ).toPromise();
  }

  getNameStudents() {
    return this.http.get<NameStudents>(this.URL_API + '/names' ).toPromise();
  }

  putDisableStudent(_id: String) {
    return this.http.put(this.URL_API + '/disable', { _id: _id }).toPromise(); 
  }

  putStudent(student: Student) {
    return this.http.put(this.URL_API, student).toPromise();
  }
}
