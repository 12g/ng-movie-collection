import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Movie } from 'src/models/entities/Movie';
import { MoviesService } from './movies.service';
import { map } from 'rxjs/operators';
import { AppService } from '../app.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.less']
})
export class MoviesComponent
  implements OnInit {

  public loading$: Observable<boolean>;

  public isMovieGridViewEnabled$: Observable<boolean>;
  public isMovieListViewEnabled$: Observable<boolean>;

  constructor(
    protected svc: MoviesService,
    app: AppService
  ) {
    this.isMovieGridViewEnabled$ = app.viewMode$.pipe(map(v => v === 'grid'));
    this.isMovieListViewEnabled$ = app.viewMode$.pipe(map(v => v === 'list'));
  }

  ngOnInit(): void {
    this.loading$ = this.svc.loading$.pipe();
    this.svc.reloadMovies();
  }

}
