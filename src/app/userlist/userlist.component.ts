import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  //array list users is sent to here from dashboard.comp.html as users
  @Input() users: string[];


  constructor() { }

  ngOnInit(): void {
  }

}
