import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { LBL_ADD_DEVICE } from 'src/text/es/labels';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.less']
})
export class ConfigComponent
  implements OnInit {

  protected readonly VIEW_MODES: string[] = [ 'grid', 'list' ];

  @ViewChild('viewMode', { static: true }) public viewMode: MatButtonToggleGroup;

  public get labelAddMovie(): string { return LBL_ADD_DEVICE; }

  constructor(
    protected svc: MoviesService
  ) {
    this.svc.viewMode = this.VIEW_MODES[0];
  }

  ngOnInit(): void {
    this.viewMode.valueChange.subscribe(
      (vMode: string) => {
        if (this.VIEW_MODES.includes(vMode)) {
          this.svc.viewMode = vMode;
        }
      }
    )
  }

  public onClickFilters(): void {
    this.svc.openFiltersDialog().subscribe(
      filters => {
        if (filters) {
          this.svc.filters = filters;
          this.svc.reloadMovies();
        }
      }
    );
  }

}
