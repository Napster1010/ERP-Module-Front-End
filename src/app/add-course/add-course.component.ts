import { FacultyService } from './../services/faculty-service/faculty.service';
import { CourseService } from './../services/course-service/course.service';
import { DepartmentService } from './../services/department-service/department.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  status: string;
  allDepartments: any[];
  allCourses: any[];
  allFaculties: any[];

  constructor(private departmentService: DepartmentService, private courseService: CourseService, private facultyService: FacultyService) { 
    departmentService.getAllDepartments().subscribe(data => {
      if(data!=null){
        console.log(data);
        this.allDepartments = data;
      }
    })
  }

  ngOnInit() {
  }

  departmentSelected(departmentId){
    this.courseService.getCoursesByDepartmentId(departmentId).subscribe(data => {
      console.log(data);
      this.allCourses = data;
    },
    error => {
      console.log(error);
    });

    this.facultyService.getFacultiesByDepartment(departmentId).subscribe(data => {
      console.log(data);
      this.allFaculties = data;
    },
    error => {
      console.log(error);
    })

  }

  addCourse(addCourseForm: NgForm){
    console.log(addCourseForm.value);
    this.courseService.addCourse(addCourseForm.value['course'], addCourseForm.value['season'], addCourseForm.value['year'], addCourseForm.value['location'], addCourseForm.value['faculty'])
    .subscribe(data => {
      if(data!=null){
        console.log(data);
        alert('Course offered successfully!');
        addCourseForm.reset();
        this.status='';
      }
    },
    error => {
      console.log(error);
      this.status='failure';
    })
  }
}
