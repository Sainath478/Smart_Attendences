import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient : HttpClient) { }

  addStudent(student : any) : Observable<any> {
    return this.httpClient.post('http://localhost:8080/student/add-student', student);
  }

  getAllStudents(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/student/get-all-students');
  }

  updateStudent(student : any): Observable<any> {
    return this.httpClient.put('http://localhost:8080/student/update-student', student);
  }

  deleteStudent(id : number): Observable<any> {
    const apiUrl = `http://localhost:8080/student/delete-student/${id}`;
    return this.httpClient.delete(apiUrl, {responseType: 'text'});
  }


  getStudentById(id : any): Observable<any> {
    return this.httpClient.get('http://localhost:8080/student/get-student-by-id/' + id);
  }
}
