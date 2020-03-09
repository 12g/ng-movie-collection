import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Movie } from 'src/models/entities/Movie';
import { LBL_ADD_DEVICE } from 'src/text/es/labels';
import { MoviesService } from './movies.service';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.less']
})
export class MoviesComponent
  implements OnInit {

  protected load: Subscription;

  public movies$: Observable<Movie[]>;

  public get isMovieGridViewEnabled(): boolean {
    return this.svc.viewMode === 'grid';
  }
  public get isMovieListViewEnabled(): boolean {
    return this.svc.viewMode === 'list';
  }
  public get loading(): boolean {
    return (this.load) ? this.load.closed : false;
  }

  constructor(
    protected svc: MoviesService
  ) {
  }

  ngOnInit(): void {
    this.movies$ = this.svc.movies$;
    this.load = this.movies$.subscribe();
    this.svc.reloadMovies();
  }

}
