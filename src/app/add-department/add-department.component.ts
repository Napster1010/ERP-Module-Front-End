import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../services/school-service/school.service';
import { NgForm } from '@angular/forms';
import { DepartmentService } from '../services/department-service/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  status: string;
  allSchools: any[] = [];

  constructor(private schoolService: SchoolService, private departmentService: DepartmentService) {
    schoolService.getAllSchools().subscribe(data => {
      console.log(data);
      data.forEach(school => {
        this.allSchools.push(school);
      })
    })
  }

  ngOnInit() {
  }

  addDepartment(departmentForm: NgForm){
    this.departmentService.addDepartment(departmentForm.value['departmentCode'], departmentForm.value['departmentName'], departmentForm.value['school'], departmentForm.value['hod']).subscribe(data => {
      if(data!=null){
        console.log(data);
        alert('Department successfully added!');
        departmentForm.reset();
        status="";
      }  
    },
    error => {
      this.status='failure';
      console.log(error);
    })
  }

}
