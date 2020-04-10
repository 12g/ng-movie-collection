import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/models/entities/Movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.less']
})
export class MoviesGridComponent {

  public items$: Observable<Movie[]>;

  constructor(
    public svc: MoviesService
  ) {
    this.items$ = this.svc.movies$.pipe();
  }

}
