import { Component, OnInit } from '@angular/core';
import { APP_TITLE } from 'src/app/app.globals';

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.less']
})
export class HeaderTitleComponent {

  public get labelAppTitle(): string { return APP_TITLE; }

  constructor() { }

}
