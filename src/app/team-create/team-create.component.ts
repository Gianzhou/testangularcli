import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "../data-manager.service";
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";
//import the data classes
import { Employee, Project, Positions, Teams } from "../all-data";
import { MinLengthValidator, NgForm } from '@angular/forms';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  //gets sent to web service full of data
  teamInput: Teams;
  //property to hold selected team lead 
  selectedTeamLead: string;
  //property to hold an array of all Employee objects
  employee: Employee[];
  //property to hold all selected “team members”
  selectedTeamMembers: string[];
  //property to hold an array of Project objects
  project: Project[];
  //property to hold all selected “team projects
  selectedTeamProjects: string[];


  constructor(private m: DataManagerService, private router: Router,
    private route: ActivatedRoute) {

    this.teamInput = new Teams();
    this.teamInput.Employees = new Array<Employee>(); 
    this.teamInput.Projects = new Array<Project>(); 
    this.employee = new Array<Employee>();
    this.project = new Array<Project>();

  }


  ngOnInit() {
    //fetch employee data and store into employee variable
    this.m.getEmployee().subscribe(data => this.employee = data,
      err => this.router.navigate(['**']));

    //fetch project data and store into project variable
    this.m.getProject().subscribe(data => this.project = data,
      err => this.router.navigate(['**']));

  }

  public onSubmit(f: NgForm)  {

    this.teamInput.TeamLead = this.employee.find(e => e._id == this.selectedTeamLead);


    //to match ids of and add selected Team members data into our team object 
    for (let i = 0; i < this.selectedTeamMembers.length; i++) {

      this.teamInput.Employees.push(this.employee.find(e => e._id == this.selectedTeamMembers[i]));

    }

    //to match ids of and add selected Projects data into our team object 
    for (let i = 0; i < this.selectedTeamProjects.length; i++) {

      //this.teamInput.Projects = this.project.find(x => x._id == this.selectedTeamProjects[i]);

      this.teamInput.Projects.push(this.project.find(p => p._id == this.selectedTeamProjects[i]));
      }
    

    this.m.teamAdd(this.teamInput).subscribe(res => {

      // Show the response from the web service
      console.log(res as string);

      // Extract the team identifier
      let teamId = res as string;
      teamId = teamId.replace('Team ', '');
      teamId = teamId.replace(' added successfully', '');
      console.log(teamId);


      this.router.navigate(['/teamsList']);
    
    });


  }//end of on submit

}// end of class

