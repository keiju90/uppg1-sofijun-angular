import { Component, OnInit , Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})

export class EditusersComponent implements OnInit {

  //HOW TO PASS USER FROM CHILD TO PARENT.
  // 1. first create a new event with a string.
  // Output - a decorator function that marks the property as a way for data to go from the child to parent.
  // newIteemEvent - the name of the output.
  // new EventEmitter<string>()—tells Angular to create a new event emitter 
  // and that the data it emits is of type string.
  @Output() newUserEvent = new EventEmitter<string>();

  //2. Secondly, create an addNewItem() method. 
  // The addNewItem() function uses the output, newItemEvent to raise an event with 
  // the value the user types into the <input>. Next go to editusers template.
//   addNewUser(value:string) {
//     this.newUserEvent.emit(value);
// }

userinput:string = ''; 

addNewUser() {
  this.newUserEvent.emit(this.userinput);
}

  ngOnInit(): void {
  }

}
