import { FacultyService } from './services/faculty-service/faculty.service';
import { AuthGuard } from './services/guard/auth-guard.service';
import { AuthenticationService } from './services/auth-service/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AlertModule, DatepickerModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AddSchoolComponent } from './add-school/add-school.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { OfferCourseComponent } from './offer-course/offer-course.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { SchoolService } from './services/school-service/school.service';
import { DepartmentService } from './services/department-service/department.service';
import { StudentService } from './services/student-service/student.service';
import { AdminService } from './services/admin-service/admin.service';
import { AddCourseComponent } from './add-course/add-course.component';
import { StartCourseEnrollmentComponent } from './start-course-enrollment/start-course-enrollment.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { BlankComponent } from './blank/blank.component';
import { StudentCourseEnrollmentComponent } from './student-course-enrollment/student-course-enrollment.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AddSchoolComponent,
    AddFacultyComponent,
    OfferCourseComponent,
    AddDepartmentComponent,
    AddCourseComponent,
    StartCourseEnrollmentComponent,
    AddStudentComponent,
    BlankComponent,
    StudentCourseEnrollmentComponent,
    MyCoursesComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    SchoolService,
    DepartmentService,
    FacultyService,
    StudentService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
