import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ERP Module';
  currentLink: string;
  currentUserType: string;

  currentUser(){
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  linkChanged(nav: string){
    this.currentLink = nav;
  }
}
