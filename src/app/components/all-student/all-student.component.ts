import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent implements OnInit {


  constructor(private StudentService :StudentService) { }


  ngOnInit(): void {

    this.getAllStudents();


  }

  studentList: any[] = [];


  getAllStudents(){
    this.StudentService.getAllStudents().subscribe((response: any) => {

      this.studentList = response;
      console.log(response);

    })

  }

  deleteStudent(id: number) {
    this.StudentService.deleteStudent(id).subscribe({
      next: (response) => {
        alert('Student deleted successfully');
        console.log('Deleted:', response);
        this.getAllStudents();
      },
      error: (error) => {
        alert('Student delete failed');

        console.error('Delete failed:', error);
      }
    });
  }

}
