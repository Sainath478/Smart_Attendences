import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private studentService:StudentService) { }

ngOnInit(): void {
  let id = this.activatedRoute.snapshot.paramMap.get('id');
  this.getStudentById(id);
}

student : any = {
  id : '',
  name : '',
  email : ''
}




updateStudent() {

  this.studentService.updateStudent(this.student).subscribe((res) => {
    console.log(res);
    alert('Student updated successfully');
  });
}

getStudentById(id : any) {
  this.studentService.getStudentById(id).subscribe((res) => {
    this.student = res;
  });



}




}
