import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCoursesByDepartmentId(departmentId: string){
    return this.http.get<any[]>(`http://localhost:8080/course`, {
      params: {
        departmentId: departmentId
      }
    });
  }

  addCourse(courseCode: string, season: string, year: string, location: string, facultySnuId: string){
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('courseCode', courseCode);
    body = body.set('season', season);
    body = body.set('year', year);
    body = body.set('location', location);
    body = body.set('facultySnuId', facultySnuId);
    return this.http.post(`http://localhost:8080/course/enrollment`, body, {
      headers: header
    });
  }

  addCourseEnrollmentStatus(year: string, status: string, enrollmentStartTime: string, enrollmentEndTime: string){
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('year', year);
    body = body.set('status', status);
    body = body.set('enrollmentStartTime', enrollmentStartTime);
    body = body.set('enrollmentEndTime', enrollmentEndTime);
    return this.http.post(`http://localhost:8080/enrollment-status`, body, {
      headers: header
    });
  }

  getCourseEnrollment(courseCode: string, season: string, year: string){
    return this.http.get(`http://localhost:8080/course/enrollment`, {
      params: {
        courseCode: courseCode,
        season: season,
        year: year
      }
    });
  }

  addStudentCourseEnrollment(snuId: string, courseEnrollmentId: string){
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('snuId', snuId);
    body = body.set('courseEnrollmentId', courseEnrollmentId);
    return this.http.post(`http://localhost:8080/student/course-enrollment`, body, {
      headers: header
    });
  }

  getStudentCourseEnrollment(snuId: string){
    return this.http.get<any[]>(`http://localhost:8080/student/course-enrollment`, {
      params: {
        snuId: snuId
      }
    });
  }
}
