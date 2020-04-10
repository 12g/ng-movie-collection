import { Component, Inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BlobFileDownloadDialogData } from './BlobFileDownloadDialogData';
import { LBL_EXIT_BY_OUTSIDE_CLICK, LBL_DOWNLOAD } from 'src/text/es/labels';

@Component({
  selector: 'app-blob-file-download-dialog',
  templateUrl: './blob-file-download-dialog.component.html',
  styleUrls: ['./blob-file-download-dialog.component.less']
})
export class BlobFileDownloadDialogComponent {

  protected data: Blob;
  public dialogTitle: string;
  public collectionUrl: SafeResourceUrl;

  public get labelDownload(): string { return LBL_DOWNLOAD; }
  public get labelExit(): string { return LBL_EXIT_BY_OUTSIDE_CLICK; }

  constructor(
    @Inject(MAT_DIALOG_DATA) data: BlobFileDownloadDialogData,
    protected sanitizer: DomSanitizer
  ) {
    this.dialogTitle = data.title;
    const blobUrl = window.URL.createObjectURL(data.blob);
    this.collectionUrl = this.sanitizer.bypassSecurityTrustResourceUrl(blobUrl);
  }

}
