import { Component } from '@angular/core';
import { LBL_SETTINGS } from 'src/text/es/labels';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  public filter: string;

  public get labelSettings(): string { return LBL_SETTINGS; }

  constructor() {
    this.filter = '';
  }

  public onClickAddMovie(): void {
    alert('addMovie');
  }

  public onClickSettings(): void {
    alert('settings');
  }
}
