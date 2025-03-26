import { SubjectService } from './../../services/subject.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {

  constructor(private subjectService:SubjectService) { }

  subject = {
    name: '',
  };

  addSubject() {
    this.subjectService.addSubject(this.subject).subscribe((data) => {
          alert('Subject added successfully');

          this.subject.name = '';
         }
    );
    }
}
