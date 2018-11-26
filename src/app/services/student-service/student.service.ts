import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudentByNetId(netId: string){
    return this.http.get(`http://localhost:8080/student`, {params:{
      netId: netId
  }});      
  }

  addStudent(snuId: string, name: string, mobile: string, address: string, dateOfBirth: string, guardian: string, yearOfJoining: string, course: string, major: string, netId: string, password: string, departmentId: string){
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('snuId', snuId);
    body = body.set('name', name);
    body = body.set('mobile', mobile);
    body = body.set('address', address);
    body = body.set('dateOfBirth', dateOfBirth);
    body = body.set('guardianName', guardian);
    body = body.set('yearOfJoining', yearOfJoining);
    body = body.set('course', course);
    body = body.set('major', major);
    body = body.set('netId', netId);
    body = body.set('password', password);
    body = body.set('departmentId', departmentId);
    return this.http.post(`http://localhost:8080/student`, body, {
      headers: header
    });
  }
}
