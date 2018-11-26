import { SchoolService } from './../services/school-service/school.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit {
  status: string;

  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
  }

  addSchool(schoolForm: NgForm){
    console.log(schoolForm);
    this.schoolService.addSchool(schoolForm.value['schoolId'],schoolForm.value['schoolName']).subscribe(data => {
      if(data!=null){
        this.status = "success";
        alert("School added successfully!");
        schoolForm.reset();
        status="";
      }
      else{
        this.status = "failure";
      }
    },
    
    error => {
      console.log(error);
      this.status = "failure"
    })
  }
}
