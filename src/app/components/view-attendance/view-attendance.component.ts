import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent implements OnInit {

  subjects: any[] = [];
  attendanceRecords: any[] = [];
  selectedUser: string = '';
  selectedSubject: number = 0;
  selectedDate: string = '';
  selectedStudents: any[] = [];
  isModalOpen: boolean = false;

  constructor(
    private subjectService: SubjectService,
    private attendanceService: AttendanceService,
    private cd: ChangeDetectorRef // ✅ UI Refresh साठी
  ) { }

  ngOnInit(): void {
    this.getSubjects();
    this.selectedUser = localStorage.getItem('user') || '';
  }

  getSubjects(): void {
    this.subjectService.getAllSubjects().subscribe(
      (res) => {
        this.subjects = res || [];
      },
      (error) => {
        console.error('Error fetching subjects:', error);
      }
    );
  }

  changeSubject(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedSubject = Number(target?.value) || 0;
  }

  changeDate(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.selectedDate = target?.value || '';
  }

  showStudents(students: any[]): void {
    if (!students || students.length === 0) {
      alert("⚠ No students found for this record.");
      return;
    }
    this.selectedStudents = [...students]; // ✅ Array Copy करणे (Reference Issue Fix)
    this.isModalOpen = true;
    this.cd.detectChanges(); // ✅ UI Refresh करणे

    console.log('📌 Selected Students:', this.selectedStudents);
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  fetchAttendanceRecords(): void {
    if (!this.selectedUser || !this.selectedSubject || !this.selectedDate) {
      alert('⚠ Please select all fields before fetching attendance records.');
      return;
    }

    this.attendanceService.filteredAttendance(this.selectedUser, this.selectedSubject, this.selectedDate).subscribe(
      (res) => {
        this.attendanceRecords = res || [];
        if (this.attendanceRecords.length === 0) {
          alert('⚠ No attendance records found for the selected date.');
        }
      },
      (error) => {
        console.error('❌ Error fetching attendance records:', error);
      }
    );
  }
}
