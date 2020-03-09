import { Injectable, OnDestroy } from '@angular/core';
import { Movie } from 'src/models/entities/Movie';
import { Subject, Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MovieDataInMemoryService } from 'src/data/in-memory/movie.data.in-memory.service';
import { UserProfileDataInMemoryService } from 'src/data/in-memory/user-profile.data.in-memory.service';
import { MovieFilters } from './filters-dialog/MovieFilters';
import { MoviesFiltersDialogComponent } from './filters-dialog/movies-filters-dialog.component';

@Injectable({ providedIn: 'root' })
export class MoviesService
  implements OnDestroy {

  protected moviesArray: Movie[];
  protected moviesSource: Subject<Movie[]>;

  public movies$: Observable<Movie[]>;
  public filters: Partial<MovieFilters>;
  public viewMode: string;

  public get movies(): Movie[] {
    return this.moviesArray;
  }
  public set movies(movies: Movie[]) {
    this.moviesArray = movies;
    this.moviesSource.next(movies);
  }

  constructor(
    protected data: MovieDataInMemoryService,
    protected usersData: UserProfileDataInMemoryService,
    protected dialogs: MatDialog
  ) {
    this.moviesArray = [];
    this.moviesSource = new BehaviorSubject(this.moviesArray);
    this.movies$ = this.moviesSource.asObservable();
    this.filters = {};
    this.viewMode = '';
  }

  ngOnDestroy(): void {
    this.moviesSource.complete();
  }

  public reloadMovies(): void {
    const noFilters = (JSON.stringify(this.filters) === '{}');
    const query: Observable<Movie[]> = noFilters ? this.data.readAll() : this.data.readFiltered({ keywords: this.filters });

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

  public openMovieDialogFor(dvc: Movie): Observable<Movie> {
    // const dialogData: MovieDialogData = {
    //   svc: this,
    //   question: dvc ? dvc : null
    // };
    // const dialog = this.dialogs.open(
    //   MovieDialogComponent,
    //   {
    //     width: '60em',
    //     height: '35em',
    //     panelClass: [ 'no-padding' ],
    //     data: dialogData
    //   }
    // );

    // return dialog.afterClosed();
    return of(new Movie());
  }

  public openFiltersDialog(): Observable<MovieFilters> {
    return this.dialogs
      .open(MoviesFiltersDialogComponent)
      .afterClosed();
  }

  public insertMovie(m: Movie): Observable<Movie> {
    return this.data.create(m);
  }
  public updateMovie(m: Movie): Observable<Movie> {
    return this.data.update(m, m.id);
  }

}
