import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/models/entities/Movie';
import { LBL_NO_PHOTOS, LBL_NO_DESCRIPTION } from 'src/text/es/labels';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.less']
})
export class MovieCardComponent
  implements OnInit {

  @Input() public movie: Movie;

  public get labelNoPhotos(): string { return LBL_NO_PHOTOS; }
  public get labelNoDescription(): string { return LBL_NO_DESCRIPTION; }

  constructor() { }

  ngOnInit(): void {
  }

}
