import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectivePreloadingStrategyService } from './services/selective-preloading-strategy.service';

export const BASE_ROUTE = '';

export const APP_ROUTES: Routes = [
  { path: 'inicio', component: undefined, canActivate: [] },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    APP_ROUTES,
    { preloadingStrategy: SelectivePreloadingStrategyService }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
