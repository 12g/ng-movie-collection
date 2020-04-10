import { Inject, Injectable, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, mergeMap, retry, tap } from 'rxjs/operators';
import { DataService } from 'src/data/data.service.interface';
import { MovieDataService } from 'src/data/movie.data.service.interface';
import { SERVICE_ALIASES } from 'src/data/service-aliases';
import { Descriptable } from 'src/models/Descriptable';
import { Movie } from 'src/models/entities/Movie';
import { UserProfile } from 'src/models/entities/UserProfile';
import { LBL_CONFIRMATION_TITLE, LBL_QUESTION_DELETE_MOVIE } from 'src/text/es/labels';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation.dialog.component';
import { ConfirmationDialogData } from '../shared/confirmation-dialog/ConfirmationDialogData';
import { MovieDialogData } from './dialog/MovieDialogData';
import { MoviesDialogComponent } from './dialog/movies-dialog.component';

@Injectable({ providedIn: 'root' })
export class MoviesService
  implements OnDestroy {

  public filter: string;

  protected moviesArray: Movie[];
  protected moviesSource: Subject<Movie[]>;
  protected loadingMoviesSource: Subject<boolean>;

  public loading$: Observable<boolean>;
  public movies$: Observable<Movie[]>;
  public genres$: Observable<Descriptable[]>;
  public statuses$: Observable<Descriptable[]>;

  public get labelConfirmDeletionMessage(): string { return LBL_QUESTION_DELETE_MOVIE; }
  public get labelConfirmDeletion(): string { return LBL_CONFIRMATION_TITLE; }

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

    this.loadingMoviesSource = new Subject();
    this.loading$ = this.loadingMoviesSource.asObservable();

    this.genres$ = this.data.readGenres();
    this.statuses$ = this.data.readStatuses();
  }

  ngOnDestroy(): void {
    this.moviesSource.complete();
  }

  public reloadMovies(): void {
    this.loadingMoviesSource.next(true);
    const noFilters = (this.filter === '');
    const query: Observable<Movie[]> = noFilters ? this.data.readAll() : this.data.readFiltered({ keywords: this.filter });

    query.pipe(
      catchError(() => []),
      retry(1)
    ).subscribe(
      items => {
        if (items) {
          this.movies = items;
          this.loadingMoviesSource.next(false);
        }
      }
    );
  }

  public openMovieDialogFor(m: Movie): Observable<Movie> {
    const dialogData: MovieDialogData = {
      movie: m ? m : null,
      genreList: this.genres$,
      statusesList: this.statuses$
    };
    const dialog = this.dialogs.open(
      MoviesDialogComponent,
      {
        width: '60em',
        panelClass: [],
        data: dialogData,

      }
    );

    return dialog.afterClosed();
  }
  protected askForDeleteConfirmation(): Observable<boolean> {
    const dialogData: ConfirmationDialogData = {
      title: this.labelConfirmDeletion,
      message: this.labelConfirmDeletionMessage
    };

    return this.dialogs.open(
      ConfirmationDialogComponent,
      {
        width: '40em',
        panelClass: [],
        data: dialogData
      }
    ).beforeClosed();
  }

  public insertMovie(): Observable<Movie> {
    return this.openMovieDialogFor(null).pipe(
      mergeMap(
        (movie) => {
          if (movie) {
            return this.data.create(movie).pipe(
              tap(inserted => { if (inserted) { this.reloadMovies(); } })
            );
          }
        }
      )
    );
  }
  public updateMovie(movie: Movie): Observable<Movie> {
    return this.openMovieDialogFor(movie).pipe(
      mergeMap(
        (updatedMovie) => {
          if (updatedMovie) {
            return this.data.update(updatedMovie, updatedMovie.id).pipe(
              tap(updated => { if (updated) { this.reloadMovies(); } })
            );
          }
        })
    );
  }
  public deleteMovie(movie: Movie): Observable<boolean> {
    return this.askForDeleteConfirmation().pipe(
      mergeMap(
        (confirmed) => {
          if (confirmed) {
            return this.data.deleteById(movie.id).pipe(
              tap(deleted => { if (deleted) { this.reloadMovies(); } })
            );
          }
        })
    );
  }

}
