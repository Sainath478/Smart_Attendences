import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-take-attendance',
  templateUrl: './take-attendance.component.html',
  styleUrls: ['./take-attendance.component.css']
})
export class TakeAttendanceComponent implements OnInit {

  username: string = '';
  subjects: any[] = [];
  students: any[] = [];

  selectedSubject: number = 0;
  selectedDate: string = '';
  selectedTime: string = '';
  selectedStudents: any[] = [];

  constructor(
    private subjectService: SubjectService,
    private studentService: StudentService,
    private attendanceService: AttendanceService
  ) {}

  ngOnInit(): void {
    // ✅ Fetch username from localStorage
    this.username = localStorage.getItem('user') || '';

    if (!this.username) {
      alert("⚠️ User not logged in! Redirecting to login.");
      window.location.href = '/login';  // Redirect to login if no username
    }

    console.log("📌 Logged-in Username:", this.username);  // Debugging

    this.getAllStudents();
    this.getAllSubjects();
  }

  getAllSubjects() {
    this.subjectService.getAllSubjects().subscribe(res => {
      this.subjects = res;
    });
  }

  getAllStudents() {
    this.studentService.getAllStudents().subscribe(res => {
      this.students = res;
    });
  }

  toggleStudent(studentId: number) {
    if (this.selectedStudents.includes(studentId)) {
      this.selectedStudents = this.selectedStudents.filter(id => id !== studentId);
    } else {
      this.selectedStudents.push(studentId);
    }
  }

  toggleAll(event: any) {
    if (event.target.checked) {
      this.selectedStudents = this.students.map(student => student.id);
    } else {
      this.selectedStudents = [];
    }
  }

  changeDate(event: Event) {
    this.selectedDate = (event.target as HTMLInputElement).value;
  }

  changeSubject(event: Event) {
    this.selectedSubject = Number((event.target as HTMLSelectElement).value);
  }

  changeTime(event: Event) {
    this.selectedTime = (event.target as HTMLInputElement).value;
  }

  convertTo12HourFormat(time: string): string {
    if (!time) return '';
    let [hours, minutes] = time.split(':').map(Number);
    let period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
  }

  submitAttendance() {
    // ✅ Retrieve the username from local storage
    this.username = localStorage.getItem('user') || '';

    if (!this.username) {
      alert("⚠️ User not logged in! Please login again.");
      return;
    }

    // ✅ Extract only student IDs
    const studentIds = this.selectedStudents.map(student => student.id);

    const attendanceData = {
      subjectId: this.selectedSubject,
      username: this.username,
      date: this.selectedDate,
      time: this.convertTo12HourFormat(this.selectedTime),
      studentIds: studentIds  // ✅ Send IDs instead of full objects
    };

    console.log("📌 Attendance Data Sent:", attendanceData);

    this.attendanceService.saveAttendance(attendanceData).subscribe({
      next: () => {
        this.selectedStudents = [];
        alert("✅ Attendance successfully submitted!");
      },
      error: (err) => {
        console.error("❌ Error submitting attendance:", err);
        alert("❌ Attendance submission failed. Please try again!");
      }
    });
  }
}
