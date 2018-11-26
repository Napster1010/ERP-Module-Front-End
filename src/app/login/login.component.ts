import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/auth-service/authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loading = false;
  wrongCredentials = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm){
    this.submitted = true;

    if(!loginForm.valid)
      return;      
    this.loading = true;    
    console.log(loginForm);

    //Authenticate the credentials entered

    this.authenticationService.login(loginForm.value['netId'], loginForm.value['password'], loginForm.value['user'])
            .subscribe(
                data => {
                  if(data==true){
                    console.log("Login Successful");        
                    this.wrongCredentials = false;
                    this.router.navigate(['']);            
                    let user = {
                      netId: loginForm.value['netId'],
                      userType: loginForm.value['user']
                    }
                    localStorage.setItem('currentUser', JSON.stringify(user));
                  }
                  else{ 
                    console.log("Wrong Credentials");
                    this.wrongCredentials = true;
                  }
                },
                error => {
                  console.log(error);
                });  }
}
