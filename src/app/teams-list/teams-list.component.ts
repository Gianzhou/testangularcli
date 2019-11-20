import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "../data-manager.service";
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
//import the data classes
import {Employee, Project, Positions, Teams} from "../all-data";
@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  public teams: Teams[];

  constructor(private m: DataManagerService, private router: Router) { 
    this.teams = [];
  }

  ngOnInit() {
    this.m.getTeam().subscribe(data => this.teams = data, 
      err => this.router.navigate(['**']));
  }

  selectedTeam: Teams;

  selectRow(t: Teams) {
    this.selectedTeam = t;

    this.router.navigate(['/teamViewDetails', t._id]);

  }


}
