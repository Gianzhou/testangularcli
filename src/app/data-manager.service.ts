import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//We need Observable, because that’s the type of the web service get/fetch result.
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { map } from 'rxjs/operators';

//import the data classes
import {Employee, Project, Positions, Teams} from "./all-data";

@Injectable()
export class DataManagerService {
//create private fields to hold the data locally
  private employee: Employee[];
  private project: Project[];
  private team: Teams[];
  private position: Positions[];

  //3. will hold url to teams api web service
  private url = "https://peaceful-inlet-39183.herokuapp.com";

  constructor(private http: HttpClient) { }


  //For each use case, write a method that calls an HttpClient method on the web service.
  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/employees`)
  }

  getProject(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.url}/projects`)
  }

  getTeam(): Observable<Teams[]> {
    return this.http.get<Teams[]>(`${this.url}/teams`)
  }

  getPosition(): Observable<Positions[]> {
    return this.http.get<Positions[]>(`${this.url}/positions`)
  }

  getOneTeam(_id: string) {

    return this.http.get<Teams[]>(`${this.url}/team/${_id}`)

  }


  teamAdd(newTeam: Teams): Observable<any> {

    return this.http.post<any>(`${this.url}/teams`, newTeam)
    .pipe(map(wrapper => wrapper.message));
  }

  teamUpdate(t: Teams) : Observable<any>  {

    return this.http.put<any>(`${this.url}/team/${t._id}`, t)
    .pipe(map(wrapper => wrapper.message));
  }


}
