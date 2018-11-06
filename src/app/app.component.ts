import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  APP_TITLE = 'Student Management System';
  UNIVERSITY = 'University of ABC';
  obj ={
    id:"1",
    name:'kgr'
  }

  arr = ["abc","def","ghi"]
  isTrue = false;
  myname = "nnn";
}
