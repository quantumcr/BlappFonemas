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

  readonly URL_API = 'https://blapp.herokuapp.com/api/students';  
  
  constructor(
    private http: HttpClient
  ) { }

  createStudent(student: Student) {
    return this.http.post<Student>(this.URL_API, student, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).toPromise();
  }

  getStudent(_id: String) {
    return this.http.get<Student>(this.URL_API + `/${_id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).toPromise();
  }

  getNameStudents() {
    return this.http.get<NameStudents>(this.URL_API + '/names', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).toPromise();
  }

  putDisableStudent(_id: String) {
    return this.http.put(this.URL_API + '/disable', { _id: _id }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).toPromise(); 
  }

  putStudent(student: Student) {
    return this.http.put(this.URL_API, student, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).toPromise();
  }
}
