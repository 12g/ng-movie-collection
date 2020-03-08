import { Component, OnInit } from '@angular/core';
import { APP_VERSION } from '../app.globals';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {

  public get labelVersion(): string { return APP_VERSION; }

  constructor() { }

}
