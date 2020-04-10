import { Component, OnInit, ViewChild } from '@angular/core';
import { LBL_SETTINGS, LBL_ADD_MOVIE } from 'src/text/es/labels';
import { MoviesService } from 'src/app/movies/movies.service';
import { take } from 'rxjs/operators';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatMenu } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { MoviesImportDialogComponent } from 'src/app/movies/import-dialog/movies-import-dialog.component';

@Component({
  selector: 'app-header-actions',
  templateUrl: './header-actions.component.html',
  styleUrls: ['./header-actions.component.less']
})
export class HeaderActionsComponent
  implements OnInit {

  private readonly DOWNLOAD_LINK_VALID_TIME = 30000;

  public collectionBlob: Blob;
  public collectionUrl: SafeResourceUrl;

  @ViewChild('appMenu', { static: true }) public appMenu: MatMenu;

  public get labelSettings(): string { return LBL_SETTINGS; }
  public get labelAdd(): string { return LBL_ADD_MOVIE; }

  constructor(
    protected movieSvc: MoviesService,
    protected dialogSvc: MatDialog,
    protected sanitizer: DomSanitizer
  ) {
    this.collectionBlob = null;
    this.collectionUrl = null;
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

  public onClickGenerateExportJSONCollectionLink(): void {
    const moviesJSON = JSON.stringify(this.movieSvc.movies);
    this.collectionBlob = new Blob([moviesJSON], { type: 'application/json' });
    this.collectionUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(this.collectionBlob));
    window.setTimeout(() => {
      this.collectionBlob = null;
      this.collectionUrl = null;
    }, this.DOWNLOAD_LINK_VALID_TIME);
  }

}
