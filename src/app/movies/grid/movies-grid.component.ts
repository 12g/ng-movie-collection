import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DataGridTemplateComponent } from 'src/app/templates/data-grid.template.component';
import { Movie } from 'src/models/entities/Movie';
import { MoviesService } from '../movies.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.less']
})
export class MoviesGridComponent
  implements OnInit, OnDestroy {

  protected load: Subscription;

  @Input() public items: Movie[];

  public get loading(): boolean {
    return (this.load) ? this.load.closed : false;
  }

  constructor(
    protected svc: MoviesService,
    protected snackbar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.load = this.svc.movies$.subscribe(
      m => {
        if (m) {
          this.items = m;
        }
      }
    );
    this.svc.reloadMovies();
  }

  ngOnDestroy(): void {
    if (this.load) {
      this.load.unsubscribe();
    }
  }

}
