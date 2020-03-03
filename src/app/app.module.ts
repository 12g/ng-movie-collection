import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppAngularMaterialModule } from './app.angular-material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MatProgressSpinnerCenteredComponent } from './components/mat-spinner-centered/mat-spinner-centered.component';
import { ConfirmationDialogComponent } from './dialogs/confirmation/confirmation.dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MatProgressSpinnerCenteredComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ConfirmationDialogComponent
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
