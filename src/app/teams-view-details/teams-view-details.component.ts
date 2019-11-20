import { Component, OnInit } from '@angular/core';

import { DataManagerService } from "../data-manager.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";
//import the data classes
import {Project, Positions, Employee, Teams} from "../all-data";

@Component({
  selector: 'app-teams-view-details',
  templateUrl: './teams-view-details.component.html',
  styleUrls: ['./teams-view-details.component.css']
})
export class TeamsViewDetailsComponent implements OnInit {

  private tempId: string;
  public team: Teams;
  

  constructor(private m: DataManagerService, public router: Router, private route: ActivatedRoute) { 
     //This prevents a data binding errors
    this.team = new Teams();
    this.team.TeamLead = new Employee();
    //this.team.Projects = [];
    //this.team.Employees = [];
    
   
 
    //extract the parameter the we need
    this.tempId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.m.getOneTeam(this.tempId).subscribe(data => this.team = data[0], 
      err => this.router.navigate(['**']));
      console.log(this.team);
  }

}
