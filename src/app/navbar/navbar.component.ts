import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin-service/admin.service';
import { StudentService } from '../services/student-service/student.service';
import { FacultyService } from '../services/faculty-service/faculty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedInUser: any;
  loggedInUserName: string;

  constructor(private adminService: AdminService, private studentService: StudentService, private facultyService: FacultyService, private router: Router) {
    this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    if(this.loggedInUser['userType'] === 'admin'){
      adminService.getAdminByNetId(this.loggedInUser['netId']).subscribe(data => {
        this.loggedInUserName = data['name'];
      });
    }
    else if(this.loggedInUser['userType'] === 'faculty'){
      facultyService.getFacultyByNetId(this.loggedInUser['netId']).subscribe(data => {
        this.loggedInUserName = data['name'];
      });
    }
    else if(this.loggedInUser['userType'] === 'student'){
      studentService.getStudentByNetId(this.loggedInUser['netId']).subscribe(data => {
        this.loggedInUserName = data['name'];
      });
    }
  }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }

}
