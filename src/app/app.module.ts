import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
// import { ComponentAddStudentComponent } from './components/add-student/component-add-student.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { AllStudentComponent } from './components/all-student/all-student.component';
import { AllSubjectComponent } from './components/all-subject/all-subject.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { EditSubjectComponent } from './components/edit-subject/edit-subject.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { FacultyDashboardComponent } from './components/faculty-dashboard/faculty-dashboard.component';
import { FacultyMenuComponent } from './components/faculty-menu/faculty-menu.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TakeAttendanceComponent } from './components/take-attendance/take-attendance.component';
import { ViewAllAttendanceComponent } from './components/view-all-attendance/view-all-attendance.component';
import { ViewAttendanceComponent } from './components/view-attendance/view-attendance.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HidePasswordPipe } from './pipes/hide-password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    // ComponentAddStudentComponent,
    AddSubjectComponent,
    AddUserComponent,
    AdminDashboardComponent,
    AdminMenuComponent,
    AllStudentComponent,
    AllSubjectComponent,
    AllUsersComponent,
    EditStudentComponent,
    EditSubjectComponent,
    EditUserComponent,
    FacultyDashboardComponent,
    FacultyMenuComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TakeAttendanceComponent,
    ViewAllAttendanceComponent,
    ViewAttendanceComponent,
    HidePasswordPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
