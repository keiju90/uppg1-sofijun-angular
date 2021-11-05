import { Component, OnInit } from '@angular/core';
/**
  * @desc Component dashboard -  Is the base component for all other components.
  * Includes an arraylist with users. And functions to remove and add a user.
*/ 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  ngOnInit(): void {
  }
  /**
   * users - Arraylist, takes in newUser from addUser.
   */
users: string[] = ["Sofia", "Anders", "Saga"];
  /**
   * addUser - from dashboard.component.html. 
   * Takes in the newUser event from dashborad.component.html and pushes it to the arraylist (users) above. 
   */
addUser(newUser: string) {
  this.users.push(newUser);
}
/**
   * removeLastUser - from dashboard.component.html. 
   * Removes the last user in the arraylist above (users) by this.users.pop.
   */
removeLastUser() {
this.users.pop()
}
}
