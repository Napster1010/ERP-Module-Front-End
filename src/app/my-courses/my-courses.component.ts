import { CourseService } from './../services/course-service/course.service';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student-service/student.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  snuId: string;
  studentCourseEnrollment: any[];

  constructor(private courseService: CourseService, private studentService: StudentService) { 
    this.studentService.getStudentByNetId(JSON.parse(localStorage.getItem('currentUser'))['netId'])
    .subscribe(data => {
      if(data!=null){
        console.log(data);
        this.snuId = data['snuId'];

        this.courseService.getStudentCourseEnrollment(this.snuId).subscribe(data => {
          if(data!=null){
            console.log(data);
            this.studentCourseEnrollment = data;
          }
        })
      }
    });
  }

  ngOnInit(){

  }
}
