import { Component, OnInit } from '@angular/core';

import { DataManagerService } from "../data-manager.service";
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
//import the data classes
import {Employee, Project, Positions, Teams} from "../all-data";

@Component({
  selector: 'app-user-account-view-details',
  templateUrl: './user-account-view-details.component.html',
  styleUrls: ['./user-account-view-details.component.css']
})
export class UserAccountViewDetailsComponent implements OnInit {

  constructor(private m: DataManagerService, private router: Router) { }

  ngOnInit() {
  }

}
