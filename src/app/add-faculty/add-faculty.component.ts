import { DepartmentService } from './../services/department-service/department.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FacultyService } from '../services/faculty-service/faculty.service';
@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {
  status: string;
  allDepartments: any[];

  constructor(private departmentService: DepartmentService, private facultyService: FacultyService) { 
    departmentService.getAllDepartments().subscribe(data => {
      if(data!=null){
        console.log(data);
        this.allDepartments = data;
      }
    })
  }

  ngOnInit() {
  }

  addFaculty(addFacultyForm: NgForm){
    console.log(addFacultyForm.value);
    let dateOfBirth = addFacultyForm.value['dateOfBirth']['day'] + '-' + addFacultyForm.value['dateOfBirth']['month'] + '-' + addFacultyForm.value['dateOfBirth']['year'];
    this.facultyService.addFaculty(addFacultyForm.value['snuId'], addFacultyForm.value['name'], addFacultyForm.value['mobileNumber'], addFacultyForm.value['address'], dateOfBirth, addFacultyForm.value['netId'], addFacultyForm.value['password'], addFacultyForm.value['department'])
    .subscribe(data => {
      if(data!=null){
        console.log(data);
        alert('Faculty added successfully!');
        addFacultyForm.reset();        
        this.status = '';
      }
    },
    error => {
      console.log(error);
      this.status = 'failure';
    })
  }

}
