import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';
import { LBL_VIEW_AS_GRID, LBL_VIEW_AS_LIST } from 'src/text/es/labels';

@Component({
  selector: 'app-header-view-switch',
  templateUrl: './header-view-switch.component.html',
  styleUrls: ['./header-view-switch.component.less']
})
export class HeaderViewSwitchComponent {

  protected viewMode: string;

  public isMovieGridViewEnabled$: Observable<boolean>;
  public isMovieListViewEnabled$: Observable<boolean>;

  public get labelGridView(): string { return LBL_VIEW_AS_GRID; }
  public get labelListView(): string { return LBL_VIEW_AS_LIST; }

  constructor(
    protected app: AppService
  ) {
    this.isMovieGridViewEnabled$ = this.app.viewMode$.pipe(map(v => v === 'grid'));
    this.isMovieListViewEnabled$ = this.app.viewMode$.pipe(map(v => v === 'list'));
  }

  public onClickGrid(): void {
    this.app.setGridViewMode();
  }

  public onClickList(): void {
    this.app.setListViewMode();
  }

}
