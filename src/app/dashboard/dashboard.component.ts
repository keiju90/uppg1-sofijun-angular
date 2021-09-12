import { Component, OnInit } from '@angular/core';


// const users = [
//   {id:1, name:"sofia"}
// ]; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {



  // name: string = '';

  // setValue(): void {
  //   this.name = 'Nancy';
  // }



  // userfromchild:string = "user from child";

  // methodInParent(event:any){
  //   console.log('whats passed from event', event);
  //   this.userfromchild = event;
  // }
  constructor() { }

  ngOnInit(): void {
  }

  // clicked(): void{
  //   console.log("you clicked me")
  // }

items = ["item1"];

addItem(newItem: string) {
  this.items.push(newItem);
}

}
