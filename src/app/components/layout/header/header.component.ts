import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/dialogs/confirmation/confirmation.dialog.component';
import { Observable } from 'rxjs';
import { NavService } from '../../../services/navigation/nav.service';
import { LBL_TOGGLE_SIDEMENU, LBL_EDIT_PROFILE, LBL_DISCONNECT } from 'src/app/labels/es/labels';
import { MSG_INF_UNSUPPORTED_OPERATION } from 'src/app/labels/es/messages';
import { ConfirmationDialogData } from 'src/app/dialogs/confirmation/ConfirmationDialogData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent
  implements OnInit {

  public get currentModuleNameLabel(): string { return this.navigation.currentModuleName; }
  public get userNameLabel(): string { return 'User'; }
  public get toggleSideMenuLabel(): string { return LBL_TOGGLE_SIDEMENU; }
  public get editProfileLabel(): string { return LBL_EDIT_PROFILE; }
  public get disconnectLabel(): string { return LBL_DISCONNECT; }

  constructor(
    protected snackBar: MatSnackBar,
    protected dialog: MatDialog,
    protected navigation: NavService
  ) { }

  ngOnInit() {
  }

  protected askToConfirmExitSession(): Observable<boolean> {
    const dialogData: ConfirmationDialogData = {
      title: '¿Cerrar sesión?',
      message: 'Cualquier cambio no guardado se perderá.'
    };

    return this.dialog.open(
      ConfirmationDialogComponent,
      {
        width: '24rem',
        data: dialogData
      }
    ).afterClosed();
  }

  public onClickEditProfile(): void {
    this.snackBar.open(MSG_INF_UNSUPPORTED_OPERATION);
  }

  public onClickExitSession(): void {
    this.snackBar.open(MSG_INF_UNSUPPORTED_OPERATION);
  }
}
