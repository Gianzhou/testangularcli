import { Component, OnInit } from '@angular/core';

import { DataManagerService } from "../data-manager.service";
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
//import the data classes
import {Employee, Project, Positions, Teams} from "../all-data";

@Component({
  selector: 'app-user-account-create',
  templateUrl: './user-account-create.component.html',
  styleUrls: ['./user-account-create.component.css']
})
export class UserAccountCreateComponent implements OnInit {

  constructor(private m: DataManagerService, private router: Router) { }

  ngOnInit() {
  }

}
