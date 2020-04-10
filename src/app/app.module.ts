import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { InternalDataModule } from 'src/data/internal-data.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies/list/movies-list.component';
import { MoviesGridComponent } from './movies/grid/movies-grid.component';
import { MoviesDialogComponent } from './movies/dialog/movies-dialog.component';
import { MoviesGridCardComponent } from './movies/grid/card/movies-grid-card.component';
import { HeaderViewSwitchComponent } from './header/view-switch/header-view-switch.component';
import { HeaderTitleComponent } from './header/title/header-title.component';
import { HeaderActionsComponent } from './header/actions/header-actions.component';
import { MoviesImportDialogComponent } from './movies/import-dialog/movies-import-dialog.component';
import { BlobFileDownloadDialogComponent } from './shared/blob-file-download-dialog/blob-file-download-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    MoviesListComponent,
    MoviesGridComponent,
    MoviesDialogComponent,
    MoviesGridCardComponent,
    HeaderViewSwitchComponent,
    HeaderTitleComponent,
    HeaderActionsComponent,
    MoviesImportDialogComponent,
    BlobFileDownloadDialogComponent
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
