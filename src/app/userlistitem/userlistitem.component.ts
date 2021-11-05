import { Component, OnInit, Input } from '@angular/core';
/**
  * @desc Component userlistitem - contains ONE user. 
  * Takes in @Input: user and textColor. 
*/ 
@Component({
  selector: 'app-userlistitem',
  templateUrl: './userlistitem.component.html',
  styleUrls: ['./userlistitem.component.css']
})
export class UserlistitemComponent implements OnInit {
// Input user - Takes in one user from the array in userlistitem 
@Input() user: string;

// Input textColor - textColor from userlist.component.html 
@Input() textColor: boolean;

  ngOnInit(): void {
  }
}
