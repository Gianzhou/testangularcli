import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    PdfReportComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,
    EmbedVideo.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
