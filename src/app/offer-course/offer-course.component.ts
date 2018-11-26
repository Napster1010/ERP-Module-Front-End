import { DepartmentService } from './../services/department-service/department.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OfferCourseService } from '../services/offer-course-service/offer-course.service';

@Component({
  selector: 'app-offer-course',
  templateUrl: './offer-course.component.html',
  styleUrls: ['./offer-course.component.css']
})
export class OfferCourseComponent implements OnInit {
  status: string;
  allDepartments: any[];

  constructor(private departmentService: DepartmentService, private courseService: OfferCourseService) { 
    departmentService.getAllDepartments().subscribe(data => {
      if(data!=null){
        console.log(data);
        this.allDepartments = data;
      }
    })
  }

  ngOnInit() {
  }

  offerCourse(offerCourseForm: NgForm){
    console.log(offerCourseForm.value);
    this.courseService.addCourse(offerCourseForm.value['courseCode'], offerCourseForm.value['courseName'], offerCourseForm.value['department'], offerCourseForm.value['credits'], offerCourseForm.value['courseDuration'])
    .subscribe(data => {
      if(data!=null){
        console.log(data);
        alert('Course successfully added!');
        offerCourseForm.reset();
        this.status = "";
      }
    },
    error => {
      this.status = "failure";
      console.log(error);
    })
  }

}
