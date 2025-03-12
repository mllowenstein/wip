import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'mll-upload',
  imports: [CommonModule, FormsModule, MatInputModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  files: any[] = [];

  onFileSelected(event: any) {
    for (let file of event.target.files) {
      this.files.push({ file, metadata: null });
    }
  }

  analyzeFile(fileObj: any) {
    // Dummy metadata analysis
    fileObj.metadata = {
      name: fileObj.file.name,
      size: fileObj.file.size,
      type: fileObj.file.type,
      lastModified: fileObj.file.lastModified
    };
  }
}
