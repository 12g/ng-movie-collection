import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Movie } from 'src/models/entities/Movie';
import { MoviesService } from './movies.service';
import { map } from 'rxjs/operators';
import { AppService } from '../app.service';

@Component({
  providers: [ MoviesService ],
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.less']
})
export class MoviesComponent
  implements OnInit {

  protected load: Subscription;

  public movies$: Observable<Movie[]>;
  public isMovieGridViewEnabled$: Observable<boolean>;
  public isMovieListViewEnabled$: Observable<boolean>;

  public get loading(): boolean {
    return (this.load) ? this.load.closed : false;
  }

  constructor(
    protected svc: MoviesService,
    app: AppService
  ) {
    this.isMovieGridViewEnabled$ = app.viewMode$.pipe(map(v => v === 'grid'));
    this.isMovieListViewEnabled$ = app.viewMode$.pipe(map(v => v === 'list'));
  }

  ngOnInit(): void {
    this.movies$ = this.svc.movies$.pipe();
    this.load = this.movies$.subscribe();
    this.svc.reloadMovies();
  }

}
