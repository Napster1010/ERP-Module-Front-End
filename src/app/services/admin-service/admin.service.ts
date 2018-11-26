import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAdminByNetId(netId: string){
    return this.http.get(`http://localhost:8080/admin`, {params:{
      netId: netId
  }});
}
}
