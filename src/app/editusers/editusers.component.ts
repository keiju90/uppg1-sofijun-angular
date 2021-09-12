import { Component, OnInit , Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.css']
})

export class EditusersComponent implements OnInit {

  // @Output() onChangeInChild = new EventEmitter<string>();
  // onClickButton(){
  //   this.onChangeInChild.emit('this is a string from add user button');
  // }
  // from child to child 
  // users = ['Sofia', 'Saga', 'greta', "Anders"];
  // addUser(newUser: string) {
  //   if (newUser) {
  //     this.users.push(newUser);
  //   }
  // }
  // }
  // end of code

  //HOW TO PASS USER FROM CHILD TO PARENT.
  // 1. first create a new event with a string.
  // Output - a decorator function that marks the property as a way for data to go from the child to parent.
  // newIteemEvent - the name of the output.
  // new EventEmitter<string>()—tells Angular to create a new event emitter 
  // and that the data it emits is of type string.
  @Output() newItemEvent = new EventEmitter<string>();

  //2. Secondly, create an addNewItem() method. 
  // The addNewItem() function uses the output, newItemEvent to raise an event with 
  // the value the user types into the <input>. Next go to editusers template.
  addNewItem(value:string) {
    this.newItemEvent.emit(value);
}
  constructor() { 
  }


  ngOnInit(): void {
  }

}
