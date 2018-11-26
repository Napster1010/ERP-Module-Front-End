import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  addDepartment(departmentCode: string, departmentName: string, schoolId: string, hod: string){
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('departmentId', departmentCode);
    body = body.set('departmentName', departmentName);
    body = body.set('schoolId', schoolId);
    body = body.set('hod', hod);
    
    return this.http.post(`http://localhost:8080/department`,body,{
      headers: header
    });
  }

  getAllDepartments(){
    return this.http.get<any[]>(`http://localhost:8080/department`);
  }
}