import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { UserAccountCreateComponent } from './user-account-create/user-account-create.component';
import { UserAccountViewDetailsComponent } from './user-account-view-details/user-account-view-details.component';
import { UserAccountsListComponent } from './user-accounts-list/user-accounts-list.component';
import { TeamsViewDetailsComponent } from './teams-view-details/teams-view-details.component';
import { TeamEditComponent } from './team-edit/team-edit.component';
import { UserLoginComponent } from './user-login/user-login.component';


const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'userAccountCreate', component: UserAccountCreateComponent},
  {path: 'userViewDetails', component: UserAccountViewDetailsComponent},
  {path: 'userAccountList', component: UserAccountsListComponent},
  {path: 'userLogin', component: UserLoginComponent }, 
  {path: 'teamCreate', component: TeamCreateComponent},
  {path: 'teamsList',  component: TeamsListComponent},
  {path: 'teamViewDetails/:id', component: TeamsViewDetailsComponent},
  {path: 'teamEdit/:id', component: TeamEditComponent},

  //always place empty and not found routes at the end
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
