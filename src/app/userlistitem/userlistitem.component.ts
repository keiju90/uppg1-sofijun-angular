import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userlistitem',
  templateUrl: './userlistitem.component.html',
  styleUrls: ['./userlistitem.component.css']
})
export class UserlistitemComponent implements OnInit {
@Input() users: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
