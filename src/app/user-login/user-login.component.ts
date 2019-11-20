import { Component, OnInit } from '@angular/core';

import { DataManagerService } from "../data-manager.service";
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
//import the data classes
import {Employee, Project, Positions, Teams} from "../all-data";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private m: DataManagerService, private router: Router) { }

  ngOnInit() {
  }

}
