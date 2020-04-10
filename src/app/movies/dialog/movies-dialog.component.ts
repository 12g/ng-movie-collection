import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { Descriptable } from 'src/models/Descriptable';
import { Movie } from 'src/models/entities/Movie';
import { LBL_EXIT_BY_OUTSIDE_CLICK, LBL_GENRES, LBL_MOVIE, LBL_REQUIRED, LBL_STATUS, LBL_SUBMIT, LBL_TITLE, LBL_YEAR } from 'src/text/es/labels';
import { MovieDialogData } from './MovieDialogData';

@Component({
  selector: 'app-movies-dialog',
  templateUrl: './movies-dialog.component.html',
  styleUrls: ['./movies-dialog.component.less']
})
export class MoviesDialogComponent {

  protected movieId: number;
  public formGroup: FormGroup;
  public years$: Observable<number[]>;
  public genres$: Observable<Descriptable[]>;
  public statuses$: Observable<Descriptable[]>;

  public get title() { return this.formGroup.get('title'); }
  public get year() { return this.formGroup.get('year'); }
  public get genres() { return this.formGroup.get('genres') as FormArray; }
  public get status() { return this.formGroup.get('status'); }

  public get labelMovie(): string { return LBL_MOVIE; }
  public get labelTitle(): string { return LBL_TITLE; }
  public get labelYear(): string { return LBL_YEAR; }
  public get labelGenres(): string { return LBL_GENRES; }
  public get labelStatus(): string { return LBL_STATUS; }
  public get labelSubmit(): string { return LBL_SUBMIT; }
  public get labelRequired(): string { return LBL_REQUIRED; }
  public get labelExit(): string { return LBL_EXIT_BY_OUTSIDE_CLICK; }


  public get movie(): Movie {
    const m = new Movie();
    if (this.movieId) {
      m.id = this.movieId;
    }
    m.title = this.title.value;
    m.releaseYear = this.year.value;
    m.images = [];
    m.genres = this.genres.value.map((gId: number) => ({ id: gId }));
    if (this.status.value) {
      m.status = { id: this.status.value };
    }
    return m;
  }
  public set movie(m: Movie) {
    this.movieId = m.id? m.id : 0;
    this.title.setValue(m.title);
    this.year.setValue(m.releaseYear);

    if (m.genres) {
      const genresIds = m.genres.map(g => g.id);
      this.genres.setValue(genresIds);
    }
    if (m.status) {
      this.status.setValue(m.status.id);
    }
  }

  constructor(
    protected dialog: MatDialogRef<MoviesDialogComponent>,
    protected fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: MovieDialogData
  ) {
    this.formGroup = this.fb.group({
      title: ['', Validators.required],
      year: [null, Validators.required],
      genres: [[]],
      status: [null]
    });
    this.years$ = of(this.createConsecutiveNumbersArray(1950, 2020));
    this.genres$ = data.genreList;
    this.statuses$ = data.statusesList;

    if (data && data.movie) {
      this.movie = data.movie;
    }
  }

  /**
   * Create an array of numbers from 'start' to 'finish', including both.
   */
  protected createConsecutiveNumbersArray(start: number, finish: number): number[] {
    const length = finish - start + 1;
    const arr: number[] = new Array(length);
    for (let i = 0; i < length; i++) {
      arr[i] = (start + i);
    }
    return arr;
  }

  public submit(): void {
    this.dialog.close(this.movie);
  }

}
