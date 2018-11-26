import { StudentService } from './../services/student-service/student.service';
import { FacultyService } from './../services/faculty-service/faculty.service';
import { CourseService } from './../services/course-service/course.service';
import { DepartmentService } from './../services/department-service/department.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-course-enrollment',
  templateUrl: './student-course-enrollment.component.html',
  styleUrls: ['./student-course-enrollment.component.css']
})
export class StudentCourseEnrollmentComponent implements OnInit {
  status: string;
  allDepartments: any[];
  allCourses: any[];
  allFaculties: any[];
  courseEnrollment: any;
  student: any;

  constructor(private departmentService: DepartmentService, private courseService: CourseService, private facultyService: FacultyService, private studentService: StudentService) {
    departmentService.getAllDepartments().subscribe(data => {
      if (data != null) {
        console.log(data);
        this.allDepartments = data;
      }
    })
  }

  ngOnInit() {
  }

  departmentSelected(departmentId) {
    this.courseService.getCoursesByDepartmentId(departmentId).subscribe(data => {
      console.log(data);
      this.allCourses = data;
    },
      error => {
        console.log(error);
      });
  }

  addCourseEnrollment(courseEnrollmentForm: NgForm) {
    console.log(courseEnrollmentForm.value);

    //Get course enrollment
    this.courseService.getCourseEnrollment(courseEnrollmentForm.value['course'], courseEnrollmentForm.value['season'], courseEnrollmentForm.value['year'])
      .subscribe(data => {
        if (data != null) {
          console.log(data);
          this.courseEnrollment = data;

          //Get student details
          this.studentService.getStudentByNetId(JSON.parse(localStorage.getItem('currentUser'))['netId'])
            .subscribe(data => {
              if (data != null) {
                console.log(data);
                this.student = data;

                //Add student course enrollment
                this.courseService.addStudentCourseEnrollment(this.student['snuId'], this.courseEnrollment['id'])
                  .subscribe(data => {
                    if (data != null) {
                      console.log(data);
                      alert('Enrollment successful!');
                      courseEnrollmentForm.reset();
                      this.status = '';
                    }
                  },
                    error => {
                      console.log(error);
                      this.status = 'failure';
                    })
              }
            },
              error => {
                console.log(error);
                this.status = 'failure';
              });
        }
      },
        error => {
          console.log(error);
          this.status = 'failure';
        });
  }
}
