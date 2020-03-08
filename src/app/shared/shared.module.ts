import { NgModule } from '@angular/core';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation.dialog.component';
import { MatProgressSpinnerCenteredComponent } from './mat-spinner-centered/mat-spinner-centered.component';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    MatProgressSpinnerCenteredComponent
  ],
  imports: [
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ConfirmationDialogComponent,
    MatProgressSpinnerCenteredComponent
  ]
})
export class SharedModule { }
