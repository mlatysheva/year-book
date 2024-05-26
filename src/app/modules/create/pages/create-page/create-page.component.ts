import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.scss'
})
export class CreatePageComponent {
  pdfSrc = '/assets/pdf/test-book.pdf';
}
