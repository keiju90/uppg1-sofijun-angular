import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userlistitem',
  templateUrl: './userlistitem.component.html',
  styleUrls: ['./userlistitem.component.css']
})
export class UserlistitemComponent implements OnInit {
// @Input() users: string[];
// Takes in one user from the array in userlistitem
@Input() user: string;

  ngOnInit(): void {
  }

}
