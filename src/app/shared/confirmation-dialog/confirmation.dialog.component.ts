import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogData } from './ConfirmationDialogData';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation.dialog.component.html',
  styleUrls: ['./confirmation.dialog.component.less']
})
export class ConfirmationDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData
  ) { }

}
