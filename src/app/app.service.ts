import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  protected viewModeSource: Subject<string>;
  public viewMode$: Observable<string>;

  constructor() {
    this.viewModeSource = new BehaviorSubject('grid');
    this.viewMode$ = this.viewModeSource.asObservable();
  }

  public setGridViewMode(): void {
    this.viewModeSource.next('grid');
  }

  public setListViewMode(): void {
    this.viewModeSource.next('list');
  }

}
