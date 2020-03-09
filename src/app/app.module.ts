import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies/list/movies-list.component';
import { MoviesGridComponent } from './movies/grid/movies-grid.component';
import { MoviesFiltersDialogComponent } from './movies/filters-dialog/movies-filters-dialog.component';
import { InternalDataModule } from 'src/data/internal-data.module';
import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    MoviesListComponent,
    MoviesGridComponent,
    MoviesFiltersDialogComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    InternalDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
