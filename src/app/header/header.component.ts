import { Component } from '@angular/core';
import { LBL_SETTINGS, LBL_ADD_MOVIE } from 'src/text/es/labels';
import { Movie } from 'src/models/entities/Movie';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  public filter: string;

  constructor(
    protected movieSvc: MoviesService
  ) {
    this.filter = '';
  }

}
