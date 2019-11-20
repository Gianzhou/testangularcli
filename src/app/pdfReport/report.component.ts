import { Component } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
    selector: 'my-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
    
})

export class PdfReportComponent {
    pdfrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
    pdfsrc: string = "https://github.com/Gianzhou/testangularcli/blob/master/src/app/pdfReport/assets/report.pdf";
}