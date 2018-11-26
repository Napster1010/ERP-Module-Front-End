import { DepartmentService } from './../services/department-service/department.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../services/student-service/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  status: string;
  allDepartments: any[];

  constructor(private departmentService: DepartmentService, private studentService: StudentService) { 
    departmentService.getAllDepartments().subscribe(data => {
      if(data!=null){
        console.log(data);
        this.allDepartments = data;
      }
    })
  }

  ngOnInit() {
  }

  addStudent(addStudentForm: NgForm){
    console.log(addStudentForm.value);
    let dateOfBirth = addStudentForm.value['dateOfBirth']['day'] + '-' + addStudentForm.value['dateOfBirth']['month'] + '-' + addStudentForm.value['dateOfBirth']['year'];
    this.studentService.addStudent(addStudentForm.value['snuId'], addStudentForm.value['name'], addStudentForm.value['mobileNumber'], addStudentForm.value['address'], dateOfBirth, addStudentForm.value['guardianName'], addStudentForm.value['yearOfJoining'], addStudentForm.value['course'], addStudentForm.value['major'], addStudentForm.value['netId'], addStudentForm.value['password'], addStudentForm.value['department'])
    .subscribe(data => {
      if(data!=null){
        console.log(data);
        alert('Student added successfully!');
        addStudentForm.reset();        
        this.status = '';
      }
    },
    error => {
      console.log(error);
      this.status = 'failure';
    })
  }


}
