import { Component, OnInit, OnDestroy } from '@angular/core';
import { LBL_SETTINGS, LBL_ADD_MOVIE } from 'src/text/es/labels';
import { Movie } from 'src/models/entities/Movie';
import { MoviesService } from '../movies/movies.service';
import { FormControl, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent
  implements OnInit, OnDestroy {

  public filterChangeSubscription: Subscription;

  public filterFormControl: FormControl;

  constructor(
    protected movieSvc: MoviesService,
    protected fb: FormBuilder
  ) {
    this.filterFormControl = this.fb.control('');
  }

  ngOnInit(): void {
    this.filterChangeSubscription = this.filterFormControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      (filter: string) => {
        this.movieSvc.filter = filter;
        this.movieSvc.reloadMovies();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.filterChangeSubscription) {
      this.filterChangeSubscription.unsubscribe();
    }
  }

}
