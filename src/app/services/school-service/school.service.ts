import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }

  addSchool(schoolId: string, schoolName: string){
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('schoolId', schoolId);
    body = body.set('schoolName', schoolName);
    return this.http.post(`http://localhost:8080/school`,body,{
      headers: header
    });
  }

  getAllSchools(){
    return this.http.get<any[]>(`http://localhost:8080/school`);
  }
}
