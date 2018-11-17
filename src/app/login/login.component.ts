import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loading = false;

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
                  console.log(data);
                },
                error => {
                  console.log(error);
                });  }
}
