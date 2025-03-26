import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-all-subject',
  templateUrl: './all-subject.component.html',
  styleUrls: ['./all-subject.component.css']
})
export class AllSubjectComponent implements OnInit {


  constructor(private subjectService:SubjectService) { }

  subjectList: any[] = [];

  ngOnInit(): void {
    this.getAllSubjects();
  }

  getAllSubjects() {
    this.subjectService.getAllSubjects().subscribe((response) => {
      this.subjectList = response;
      console.log(response);
    });
  }

  deleteSubject(subjectId: any) {
    if (confirm("Are you sure you want to delete this subject?")) {
      this.subjectService.deleteSubjectById(subjectId).subscribe((response) => {
        alert("Subject deleted successfully!");
        console.log(response);
        this.getAllSubjects();
      });
    } else {
      console.log("Deletion cancelled");
    }
  }



}
