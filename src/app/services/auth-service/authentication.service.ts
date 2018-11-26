import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(netId: string, password: string, userType: string) {
        
        if(userType==='admin'){                
            return this.http.get(`http://localhost:8080/admin/login`, {params:{
                netId: netId,
                password: password
            }});
        }else if(userType==='faculty'){
            return this.http.get(`http://localhost:8080/faculty/login`, {params:{
                netId: netId,
                password: password
            }});
        }else if(userType==='student'){
            return this.http.get(`http://localhost:8080/student/login`, {params:{
                netId: netId,
                password: password
            }});
        }
    }        

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}