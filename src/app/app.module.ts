import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtenedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { EmbedVideo } from 'ngx-embed-video';
import { HttpClientModule } from '@angular/common/http';

import { VideoComponent } from './video/video.component';
import { PdfReportComponent } from './pdfReport/report.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    PdfReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PdfViewerModule,
    EmbedVideo.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
