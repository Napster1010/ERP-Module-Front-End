import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferCourseService {

  constructor(private http: HttpClient) { }

  addCourse(courseCode: string, courseName: string, departmentId: string, credits: string, duration: string){
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('courseCode', courseCode);
    body = body.set('courseName', courseName);
    body = body.set('departmentId', departmentId);
    body = body.set('credits', credits);
    body = body.set('duration', duration);
    return this.http.post(`http://localhost:8080/course`, body, {
      headers: header
    });
  }
}
