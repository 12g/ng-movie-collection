import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../../services/navigation/NavItem';
import { BASE_ROUTE } from 'src/app/app-routes';
import { NavService } from '../../services/navigation/nav.service';

@Component({
  providers: [ NavService ],
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: [
    './layout.component.less'
  ]
})
export class LayoutComponent
  implements OnInit {

  public links: NavItem[];

  public get baseRoute(): string { return `/${BASE_ROUTE}`; }

  protected set currentModuleName(v: string) { this.navigation.currentModuleName = v; }

  constructor(
    // protected sessionsHttpSvc: SessionsHttpService,
    protected router: Router,
    protected navigation: NavService
  ) {
      this.links = this.navigation.loadNavItems();
  }

  ngOnInit() {
    const currentPath = this.navigation.currentPathName;
    console.log(`currentPath: ${currentPath}`);

    if (currentPath) {
      const linkIndex = this.links.findIndex(m => m.path === currentPath);
      console.log(`linkIndex: ${linkIndex}`);
      if (linkIndex !== -1) {
        this.onNavigation(linkIndex);
      } else {
        this.router.navigateByUrl(this.links[0].path);
      }
    }
  }

  public onNavigation(linkIndex: number) {
    const item = this.links[linkIndex];
    this.navigation.currentModuleName = item.text;
    this.links.forEach(m => { m.enabled = false; });
    item.enabled = true;
  }
}
