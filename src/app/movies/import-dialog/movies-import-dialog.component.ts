import { Component } from '@angular/core';
import { LBL_EXIT_BY_OUTSIDE_CLICK, LBL_IMPORT_MOVIES, LBL_FILE } from 'src/text/es/labels';
import { MoviesService } from '../movies.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movies-import-dialog',
  templateUrl: './movies-import-dialog.component.html',
  styleUrls: ['./movies-import-dialog.component.less']
})
export class MoviesImportDialogComponent  {

  public get labelImport(): string { return LBL_IMPORT_MOVIES; }
  public get labelFileSelect(): string { return LBL_FILE; }
  public get labelExit(): string { return LBL_EXIT_BY_OUTSIDE_CLICK; }

  private get selectedFile(): File {
    const fileSelector = (document.getElementById('fileSelector') as HTMLInputElement);
    return fileSelector.files[0];
  }

  public get hasNotSelectedFile(): boolean {
    const fileSelector = (document.getElementById('fileSelector') as HTMLInputElement);
    return !(fileSelector.validity?.valid);
  }

  constructor(
    protected dialog: MatDialogRef<MoviesImportDialogComponent>,
    protected snackBarSvc: MatSnackBar,
    protected moviesSvc: MoviesService
  ) { }

  private onFileContentsRead(contents: string): void {
    const importedMovies = JSON.parse(contents);
    this.moviesSvc.movies = importedMovies;
    this.dialog.close();
  }

  public onClickImportFile(): void {
    const reader = new FileReader();
    reader.readAsText(this.selectedFile, 'UTF-8');
    reader.onload = (evt) => { this.onFileContentsRead(evt.target.result as string); };
  }

}
