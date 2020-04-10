import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenu } from '@angular/material/menu';
import { BlobFileDownloadDialogComponent } from 'src/app/shared/blob-file-download-dialog/blob-file-download-dialog.component';
import { MoviesImportDialogComponent } from 'src/app/movies/import-dialog/movies-import-dialog.component';
import { MoviesService } from 'src/app/movies/movies.service';
import { LBL_ADD_MOVIE, LBL_SETTINGS } from 'src/text/es/labels';
import { BlobFileDownloadDialogData } from 'src/app/shared/blob-file-download-dialog/BlobFileDownloadDialogData';

@Component({
  selector: 'app-header-actions',
  templateUrl: './header-actions.component.html',
  styleUrls: ['./header-actions.component.less']
})
export class HeaderActionsComponent
  implements OnInit {

  @ViewChild('appMenu', { static: true }) public appMenu: MatMenu;

  public get labelSettings(): string { return LBL_SETTINGS; }
  public get labelAdd(): string { return LBL_ADD_MOVIE; }

  constructor(
    protected movieSvc: MoviesService,
    protected dialogSvc: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  public onClickAdd(): void {
    this.movieSvc.insertMovie().subscribe();
  }

  public onClickImportJSONCollection(): void {
    this.dialogSvc.open(
      MoviesImportDialogComponent,
      {
        width: '30rem'
      }
    );
  }

  public onClickExportJSONCollection(): void {
    const json = JSON.stringify(this.movieSvc.movies);
    const dialogData: BlobFileDownloadDialogData = {
      title: 'Descargar Colección JSON',
      blob: new Blob([json], { type: 'application/json' })
    };

    this.dialogSvc.open(
      BlobFileDownloadDialogComponent,
      {
        width: '20rem',
        data: dialogData
      }
    );
  }

}
