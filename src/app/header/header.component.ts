import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { LBL_TOGGLE_SIDEMENU, LBL_EDIT_PROFILE, LBL_DISCONNECT } from 'src/text/es/labels';
import { MSG_INF_UNSUPPORTED_OPERATION } from 'src/text/es/messages';
import { ConfirmationDialogData } from '../shared/confirmation-dialog/ConfirmationDialogData';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation.dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  public filter: string;

  constructor() {
    this.filter = '';
  }
}
