import { Component } from '@angular/core';
import { 
  NavigationEnd, 
  Router, 
  Event 
} from '@angular/router';

import { PrimeNGConfig } from 'primeng/api';

import { SharedService } from './public/shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public sharedService: 
    SharedService, 
    private primengConfig: PrimeNGConfig,
    private _router: Router,
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
    };
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);  // Hace scroll al inicio de la página
      }
    });
  }
}
