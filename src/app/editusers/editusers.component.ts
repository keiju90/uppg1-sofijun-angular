import { Component, OnInit , Output,EventEmitter} from '@angular/core';
/**
  * @desc Component editusers - Contains an input-field where you can add users.
  * contains functionality to remove and add a user which is sent to parent component (dashboard component).
*/ 
@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})

export class EditusersComponent implements OnInit {
  // Output - a decorator function that marks the property as a way for data to go from the child to parent.
  // newUserEvent - the name of the output.
  // new EventEmitter<string>()—tells Angular to create a new eventemitter 
  // and that the data it emits is of type string.
  @Output() newUserEvent = new EventEmitter<string>();
  @Output() removeUserEvent = new EventEmitter<string>();

//userinput - the userinput (ngmodel) from editusers.component.html 
userinput:string = ''; 

/**
* The addNewUser() function fires when clicking on the button "add new user".
* addNewUser uses the output newUserEvent to raise an event with 
* the value the user types into the <input> in editusers.component.html. 
* addNewuser is sent to parent dashboard.component.html
*/ 
addNewUser() {
  this.newUserEvent.emit(this.userinput);
}
/** 
* The removeUser function is fired when clicking on the "remove user" button.
* Emits an event to remove the last user.
* removeUserEvent is sent to dashboard.component.html
*/ 
removeUser () {
this.removeUserEvent.emit();
}
  ngOnInit(): void {
  }
}
