import { Routes } from '@angular/router';

export const BASE_ROUTE = '';

export const APP_ROUTES: Routes = [
  { path: 'inicio', component: undefined, canActivate: [] },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];
