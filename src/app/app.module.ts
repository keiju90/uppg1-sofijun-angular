import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserlistitemComponent } from './userlistitem/userlistitem.component';
import { EditusersComponent } from './editusers/editusers.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserlistComponent,
    UserlistitemComponent,
    EditusersComponent
  ],
  imports: [ 
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
