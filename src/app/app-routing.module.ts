import { BlankComponent } from './blank/blank.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { AddSchoolComponent } from './add-school/add-school.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/guard/auth-guard.service';
import { OfferCourseComponent } from './offer-course/offer-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { StartCourseEnrollmentComponent } from './start-course-enrollment/start-course-enrollment.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentCourseEnrollmentComponent } from './student-course-enrollment/student-course-enrollment.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';

const routes: Routes = [
  {path: '', component: BlankComponent},
  {path: 'login', component: LoginComponent},

  //Admin
  {path: 'add-school', component: AddSchoolComponent, canActivate: [AuthGuard]},
  {path: 'add-department', component: AddDepartmentComponent, canActivate: [AuthGuard]},
  {path: 'add-faculty', component: AddFacultyComponent, canActivate: [AuthGuard]},
  {path: 'offer-course', component: OfferCourseComponent, canActivate: [AuthGuard]},
  {path: 'add-course', component: AddCourseComponent, canActivate: [AuthGuard]},
  {path: 'start-course-enrollment', component: StartCourseEnrollmentComponent, canActivate: [AuthGuard]},
  {path: 'add-student', component: AddStudentComponent, canActivate: [AuthGuard]},

  //Student
  {path: 'student-course-enrollment', component: StudentCourseEnrollmentComponent, canActivate: [AuthGuard]},
  {path: 'my-courses', component: MyCoursesComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
