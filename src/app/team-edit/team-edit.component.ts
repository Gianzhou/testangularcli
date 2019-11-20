import { Component, OnInit } from '@angular/core';
import { DataManagerService } from "../data-manager.service";
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators';
//import the data classes
import { Employee, Project, Positions, Teams } from "../all-data";
@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {

  private team: Teams[];
  //gets sent to web service full of data
  private teamInput: Teams;
  //property to hold selected team lead 
  private selectedTeamLead: string;
  //property to hold an array of all Employee objects
  private employee: Employee[];
  //property to hold all selected “team members”
  private selectedTeamMembers: string[];
  //property to hold an array of Project objects
  private project: Project[];
  //property to hold all selected “team projects
  private selectedTeamProjects: string[];

  private tempId: string;

  constructor(private m: DataManagerService, private router: Router,
    private route: ActivatedRoute) {
    this.teamInput = new Teams();
    this.teamInput.Employees = new Array<Employee>(); 
    this.teamInput.Projects = new Array<Project>(); 
    this.employee = new Array<Employee>();
    this.project = new Array<Project>();


    this.tempId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    //fetch employee data and store into employee variable
    this.m.getEmployee().subscribe(data => this.employee = data,
      err => this.router.navigate(['**']));

    //fetch project data and store into project variable
    this.m.getProject().subscribe(data => this.project = data,
      err => this.router.navigate(['**']));

    // Fetch the team //data is o
    this.m.getOneTeam(this.tempId).subscribe(data => {

      // Assign "o" (the team data from the web service)
      // to the class' team property
      this.teamInput = data[0];
      // Assign the employee identifier (string) from the
      // team's "TeamLead" property to the class'
      // selected employee property
      this.selectedTeamLead = this.teamInput.TeamLead._id;

      this.selectedTeamMembers = this.teamInput.Employees.map(e => e._id);
      // ...and "this.selectedEmployees" is filled with data
      // (show the result with console.log if you're curious)

      this.selectedTeamProjects = this.teamInput.Projects.map(e => e._id);


    });
  }


  public onSubmit() {

    this.teamInput.TeamLead = this.employee.find(x => x._id == this.selectedTeamLead);

    this.teamInput.Projects = new Array<Project>(); 
    //to match ids of and add selected Projects data into our team object 
    for (var i = 0; i < this.selectedTeamProjects.length; i++) {

      this.teamInput.Projects[i] = this.project.find(x => x._id == this.selectedTeamProjects[i]);

    }
    this.teamInput.Employees = new Array<Employee>(); 

    //to match ids of and add selected Team members data into our team object 
    for (var i = 0; i < this.selectedTeamMembers.length; i++) {


      this.teamInput.Employees[i] = this.employee.find(x => x._id == this.selectedTeamMembers[i]);

    }
    //put
    this.m.teamUpdate(this.teamInput).subscribe(res => {

      // Show the response from the web service
      console.log(res as string);

      // Extract the team identifier
      let teamId = res as string;
      teamId = teamId.replace('Team ', '');
      teamId = teamId.replace(' added successfully', '');
      console.log(teamId);


      this.router.navigate(['/teamViewDetails', this.teamInput._id]);

    });


  }//end of on submit

}
