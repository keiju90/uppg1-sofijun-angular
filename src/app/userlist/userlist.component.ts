import { Component, OnInit, Input} from '@angular/core';
/**
  * @desc Component userlist - displays userlistitem component(s). 
  * Takes in arraylist (users) as @Input.
  * contains the functionality for changing the color of text in the list of users.
*/ 
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  // Input - arraylist users is sent here from dashboard.component.html as users
  @Input() users: string[];

  // When clicking on the "toggle colors" button, changeColor() is fired.
  // It changes the color of text. If textColor is true then color is white, othewise pink. 
  textColor: boolean;
  changeColor() {
    this.textColor = !this.textColor;
  }

  ngOnInit(): void {
  }
}
