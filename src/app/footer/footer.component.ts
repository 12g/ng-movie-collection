import { Component, OnInit } from '@angular/core';
import { APP_VERSION, APP_NAME } from '../app.globals';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {

  public get labelAppName(): string { return APP_NAME; }
  public get labelAppVersion(): string { return APP_VERSION; }

  constructor() { }

}
