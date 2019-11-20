import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { EmbedVideo } from 'ngx-embed-video';
import { HttpClientModule } from '@angular/common/http';

import { VideoComponent } from './video/video.component';
import { PdfReportComponent } from './pdfReport/report.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { FooterComponent } from './footer/footer.component';
import { UserAccountCreateComponent } from './user-account-create/user-account-create.component';
import { UserAccountViewDetailsComponent } from './user-account-view-details/user-account-view-details.component';
import { UserAccountsListComponent } from './user-accounts-list/user-accounts-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamsViewDetailsComponent } from './teams-view-details/teams-view-details.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamEditComponent } from './team-edit/team-edit.component';
import { DataManagerService } from './data-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    PdfReportComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    UserAccountCreateComponent,
    UserAccountViewDetailsComponent,
    UserAccountsListComponent,
    UserLoginComponent,
    TeamsListComponent,
    TeamsViewDetailsComponent,
    TeamCreateComponent,
    PageNotFoundComponent,
    TeamEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    EmbedVideo.forRoot(),
    FormsModule
  ],
  providers: [DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
