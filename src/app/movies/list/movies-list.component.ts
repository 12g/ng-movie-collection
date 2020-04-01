import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { of } from 'rxjs';
import { MoviesService } from 'src/app/movies/movies.service';
import { Movie } from 'src/models/entities/Movie';
import { LBL_TITLE, LBL_YEAR } from 'src/text/es/labels';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.less']
})
export class MoviesListComponent
  implements OnInit {

  @ViewChild('table', { static: true }) public table: MatTable<Movie>;
  public tableColumns: string[];

  public get labelTitle(): string { return LBL_TITLE; }
  public get labelYear(): string { return LBL_YEAR; }

  @Input() public set items(input: Movie[]) {
    if (this.table) {
      if (input) {
        this.table.dataSource = of(input);
      } else {
        this.table.dataSource = of([]);
      }
    }
  }

  constructor(
    protected svc: MoviesService
  ) {
    this.tableColumns = [ 'title', 'year' ];
  }

  ngOnInit() {
  }

  public onClickView(movie: Movie): void {
    this.svc.openMovieDialogFor(movie);
  }

}
