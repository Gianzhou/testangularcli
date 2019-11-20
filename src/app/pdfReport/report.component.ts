import { Component } from '@angular/core';

@Component({
    selector: 'my-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css']
    
})

export class PdfReportComponent {
    pdfrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
    pdfsrc : string = "/assets/report.pdf";
}