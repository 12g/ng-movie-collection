import { Inject, Injectable, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DataService } from 'src/data/data.service.interface';
import { MovieDataService } from 'src/data/movie.data.service.interface';
import { SERVICE_ALIASES } from 'src/data/service-aliases';
import { Descriptable } from 'src/models/Descriptable';
import { Movie } from 'src/models/entities/Movie';
import { UserProfile } from 'src/models/entities/UserProfile';
import { MovieDialogData } from './dialog/MovieDialogData';
import { MoviesDialogComponent } from './dialog/movies-dialog.component';

@Injectable()
export class MoviesService
  implements OnDestroy {

  public filter: string;

  protected moviesArray: Movie[];
  protected moviesSource: Subject<Movie[]>;

  public movies$: Observable<Movie[]>;
  public genres$: Observable<Descriptable[]>;
  public statuses$: Observable<Descriptable[]>;

  public get movies(): Movie[] {
    return this.moviesArray;
  }
  public set movies(movies: Movie[]) {
    this.moviesArray = movies;
    this.moviesSource.next(movies);
  }

  constructor(
    @Inject(SERVICE_ALIASES.movies) protected data: MovieDataService,
    @Inject(SERVICE_ALIASES.users) protected usersData: DataService<UserProfile>,
    protected dialogs: MatDialog
  ) {
    this.filter = '';

    this.moviesArray = [];

    this.moviesSource = new BehaviorSubject(this.moviesArray);
    this.movies$ = this.moviesSource.asObservable();

    this.genres$ = this.data.readGenres();
    this.statuses$ = this.data.readStatuses();
  }

  ngOnDestroy(): void {
    this.moviesSource.complete();
  }

  public reloadMovies(): void {
    const noFilters = (this.filter === '');
    const query: Observable<Movie[]> = noFilters ? this.data.readAll() : this.data.readFiltered({ keywords: this.filter });

    query.pipe(
      catchError(() => []),
      retry(1)
    ).subscribe(
      items => {
        if (items) {
          this.movies = items;
        }
      }
    );
  }

  public openMovieDialogFor(m: Movie): Observable<Movie> {
    const dialogData: MovieDialogData = {
      svc: this,
      movie: m ? m : null
    };
    const dialog = this.dialogs.open(
      MoviesDialogComponent,
      {
        width: '60em',
        panelClass: [],
        data: dialogData
      }
    );

    return dialog.afterClosed();
  }

  public insertMovie(m: Movie): Observable<Movie> {
    return this.data.create(m);
  }
  public updateMovie(m: Movie): Observable<Movie> {
    return this.data.update(m, m.id);
  }

}
