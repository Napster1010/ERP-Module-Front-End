import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http: HttpClient) { }

  getFacultyByNetId(netId: string){
    return this.http.get(`http://localhost:8080/faculty`, {params:{
      netId: netId
  }});        
  }

  addFaculty(snuId: string, name: string, mobile: string, address: string, dateOfBirth: string, netId: string, password: string, departmentId: string){
    let header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('snuId', snuId);
    body = body.set('name', name);
    body = body.set('mobile', mobile);
    body = body.set('address', address);
    body = body.set('dateOfBirth', dateOfBirth);
    body = body.set('netId', netId);
    body = body.set('password', password);
    body = body.set('departmentId', departmentId);
    return this.http.post(`http://localhost:8080/faculty`, body, {
      headers: header
    });
  }

  getFacultiesByDepartment(departmentId: string){
    return this.http.get<any[]>(`http://localhost:8080/faculty`, {
      params: {
        departmentId: departmentId
      }
    })
  }
}
