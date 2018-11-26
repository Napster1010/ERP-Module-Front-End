import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseService } from '../services/course-service/course.service';

@Component({
  selector: 'app-start-course-enrollment',
  templateUrl: './start-course-enrollment.component.html',
  styleUrls: ['./start-course-enrollment.component.css']
})
export class StartCourseEnrollmentComponent implements OnInit {
  status: string;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  scheduleCourseEnrollment(courseEnrollmentForm: NgForm){
    console.log(courseEnrollmentForm.value);
    let startTime = courseEnrollmentForm.value['startDate']['day'] + '-' + courseEnrollmentForm.value['startDate']['month'] + '-' + courseEnrollmentForm.value['startDate']['year'] + ' ' + courseEnrollmentForm.value['startTime']['hour'] + ':' + courseEnrollmentForm.value['startTime']['minute'] + ':' + courseEnrollmentForm.value['startTime']['second']
    let endTime = courseEnrollmentForm.value['endDate']['day'] + '-' + courseEnrollmentForm.value['endDate']['month'] + '-' + courseEnrollmentForm.value['endDate']['year'] + ' ' + courseEnrollmentForm.value['endTime']['hour'] + ':' + courseEnrollmentForm.value['endTime']['minute'] + ':' + courseEnrollmentForm.value['endTime']['second']
    this.courseService.addCourseEnrollmentStatus(courseEnrollmentForm.value['batch'], 'ACTIVE', startTime, endTime)
    .subscribe(data => {
      if(data!=null){
        console.log(data);
        alert('Course enrollment scheduled successfully!');
        courseEnrollmentForm.reset();
        this.status='';
      }
    },
    error => {
      console.log(error);
      this.status = 'failure';
    })
  }

}
