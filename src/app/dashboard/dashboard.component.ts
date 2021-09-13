import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//Array list that is created that takes in  the newuser from adduser below.
// from here the array list will go to the dashboard template and sent to user-list component.
users: string[] = ["user 1"];

// addUser from dashboard.component.html template, 
// takes a newuser avd oushes it to the array. 
addUser(newUser: string) {
  this.users.push(newUser);
}

}
