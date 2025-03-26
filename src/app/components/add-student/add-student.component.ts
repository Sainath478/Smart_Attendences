import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  constructor (private studentService:StudentService) { }

student = {
    name : '',
    email : '',
};


addStudent() {
  this.studentService.addStudent(this.student).subscribe((data) => {
      alert('Student added successfully!');

      this.student.name = '';
      this.student.email = '';
  }, (error) => {
      alert('Failed to add student. Please try again.');
  });
}

}
