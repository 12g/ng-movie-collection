import { Component, Input } from '@angular/core';
import { Movie } from 'src/models/entities/Movie';
import { LBL_NO_DESCRIPTION, LBL_NO_PHOTOS } from 'src/text/es/labels';
import { MovieInteractor } from '../../movie-interactor.abstract';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-movies-grid-card',
  templateUrl: './movies-grid-card.component.html',
  styleUrls: ['./movies-grid-card.component.less']
})
export class MoviesGridCardComponent
  extends MovieInteractor {

  @Input() public movie: Movie;

  public get labelNoPhotos(): string { return LBL_NO_PHOTOS; }
  public get labelNoDescription(): string { return LBL_NO_DESCRIPTION; }

  constructor(
    protected svc: MoviesService
  ) {
    super();
  }

}
