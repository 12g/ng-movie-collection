import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatProgressSpinnerCenteredComponent } from './components/mat-spinner-centered/mat-spinner-centered.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation.dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesComponent } from './components/movies/movies.component';
import { CollectionViewerListComponent } from './components/movies/list/movies-list.component';
import { MoviesGridComponent } from './components/movies/grid/movies-grid.component';
import { MoviesFiltersDialogComponent } from './components/movies/filters-dialog/movies-filters-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MatProgressSpinnerCenteredComponent,
    HeaderComponent,
    FooterComponent,
    ConfirmationDialogComponent,
    MoviesComponent,
    CollectionViewerListComponent,
    MoviesGridComponent,
    MoviesFiltersDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
