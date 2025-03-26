import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  deleteSubject(subjectId: any) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:8091/subject/add-subject';

  constructor(private http: HttpClient) {}

  addSubject(subject: any): Observable<any> {
    return this.http.post(this.apiUrl, subject, { responseType: 'text' as 'json' });
  }

  getAllSubjects(): Observable<any> {
    const apiUrl = 'http://localhost:8091/subject/get-all-subjects';
    return this.http.get(apiUrl);
  }


 deleteSubjectById(subjectId: any): Observable<any> {
    const apiUrl = `http://localhost:8091/subject/delete-subject/${subjectId}`;
    return this.http.delete(apiUrl, { responseType: 'text' });
  }

  editSubject(subject: any): Observable<any> {
    const apiUrl = 'http://localhost:8091/subject/update-subject';
    return this.http.put(apiUrl, subject, { responseType: 'text' });
  }

  getSubjectById(id: any): Observable<any> {
    const apiUrl = `http://localhost:8091/subject/get-subject-by-id/${id}`;
    return this.http.get(apiUrl);
  }

  updateSubject(subject: any): Observable<any> {
    const apiUrl = 'http://localhost:8091/subject/update-subject';
    return this.http.put(apiUrl, subject, { responseType: 'text' });
  }

}
