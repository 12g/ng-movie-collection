import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta/meta.service';

@Component({
  providers: [ MetaService ],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {

  public get labelVersion(): string { return this.meta.AppVersion; }

  constructor(
    private meta: MetaService
  ) { }

}
