import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/movies/movies.service';
import { Movie } from 'src/models/entities/Movie';
import { LBL_TITLE, LBL_YEAR } from 'src/text/es/labels';
import { MovieInteractor } from '../movie-interactor.abstract';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.less']
})
export class MoviesListComponent
  extends MovieInteractor {

  @ViewChild('table', { static: true }) public table: MatTable<Movie>;
  public tableColumns: string[];
  public items$: Observable<Movie[]>;

  public get labelTitle(): string { return LBL_TITLE; }
  public get labelYear(): string { return LBL_YEAR; }

  constructor(
    protected svc: MoviesService
  ) {
    super();
    this.tableColumns = [ 'title', 'year', 'actions' ];
    this.items$ = this.svc.movies$.pipe();
  }

}
