import { Component, OnInit } from '@angular/core';

import { DataManagerService } from "../data-manager.service";
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
//import the data classes
import {Employee, Project, Positions, Teams} from "../all-data";

@Component({
  selector: 'app-user-accounts-list',
  templateUrl: './user-accounts-list.component.html',
  styleUrls: ['./user-accounts-list.component.css']
})
export class UserAccountsListComponent implements OnInit {

  constructor(private m: DataManagerService, private router: Router) { }

  ngOnInit() {
  }

}
