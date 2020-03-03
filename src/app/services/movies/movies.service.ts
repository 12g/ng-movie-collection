import { Injectable, OnDestroy } from '@angular/core';
import { Movie } from 'src/models/entities/Movie';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MovieDataInMemoryService } from '../data/in-memory/movie.data.in-memory.service';
import { UserProfileDataInMemoryService } from '../data/in-memory/user-profile.data.in-memory.service';

@Injectable({ providedIn: 'root' })
export class MoviesService
  implements OnDestroy {

  protected moviesArray: Movie[];
  protected moviesSource: Subject<Movie[]>;

  public movies$: Observable<Movie[]>;
  public filter: string;

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
    this.filter = '';
  }

  ngOnDestroy(): void {
    this.moviesSource.complete();
  }

  public reloadMovies(): void {
    const noFilters = (JSON.stringify(this.filter) === '');
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

  public openMovieDialogFor(dvc: Movie): Observable<Movie> {
    const dialogData: MovieDialogData = {
      svc: this,
      question: dvc ? dvc : null
    };
    const dialog = this.dialogs.open(
      MovieDialogComponent,
      {
        width: '60em',
        height: '35em',
        panelClass: [ 'no-padding' ],
        data: dialogData
      }
    );

    return dialog.afterClosed();
  }

  public insertMovie(qst: Movie): Observable<Movie> {
    return this.data.create(qst);
  }
  public updateMovie(qst: Movie): Observable<Movie> {
    return this.data.update(qst, qst.id);
  }
  public replyToMovie(ans: Answer, qstId: number): Observable<boolean> {
    return this.data.readById(qstId).pipe(
      tap(
        (q) => {
          if (q) {
            q.answers.push(ans);
            this.data.update(q, qstId).subscribe();
          }
        }
      ),
      map(q => !!q)
    );
  }

}
