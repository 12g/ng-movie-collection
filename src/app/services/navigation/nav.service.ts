import { Injectable } from '@angular/core';
import { NavItem } from './NavItem';
import { APP_ROUTES } from 'src/app/app-routes';
import { NAV_ITEMS } from './nav.items';

@Injectable()
export class NavService {

  public currentModuleName: string;

  public get currentPathName(): string {
    const pathSplits = location.pathname.split('/');
    console.log(pathSplits);
    return pathSplits[1];
  }

  constructor() {
    this.currentModuleName = '';
  }

  public canNavigateTo(): boolean {
    return true;
  }

  public loadNavItems(): NavItem[] {

    return APP_ROUTES.filter(
      r => (
        r.path in NAV_ITEMS &&
        this.canNavigateTo()
      )
    ).map(
      r => NAV_ITEMS[r.path]
    );
  }
}
