import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {

  subject = {
    id: '',
    name: '',
  };
  constructor(private activatedRouter: ActivatedRoute, private subjectService: SubjectService) {}

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    this.getSubjectById(id);
  }

  // Function to update subject details
  updateSubject() {
    this.subjectService.editSubject(this.subject).subscribe(
      (response) => {
        console.log(response);
        alert('Subject updated successfully');
      },
    );
  }

  // Function to get subject details by Id
  getSubjectById(id: any) {
    this.subjectService.getSubjectById(id).subscribe(
      (res) => {
        this.subject = res;
      },

    );
  }

}






