import { Component } from '@angular/core';
import { 
  NavigationEnd, 
  Router, 
  Event 
} from '@angular/router';

import { MenuItem, PrimeNGConfig } from 'primeng/api';

import { SharedService } from './public/shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public itemsShop: MenuItem[] | undefined;
  public itemsSocial: MenuItem[] | undefined;
  public visible: boolean = false;

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
    this.shopping();
    this.social();
  }

  showDialog() {
    this.visible = true;
  }

  shopping() {
    this.itemsShop = [
      {
        icon: 'pi pi-whatsapp',
        command: () => {
          this.showDialog();
        }
      },
      {
        icon: 'pi pi-refresh',
        target: '_blank',
        url: 'https://glovoapp.com/es/es/segovia/flor-de-loto-segovia/?utm_source=google&utm_medium=organic&utm_campaign=google_reserve_place_order_action'
      },
      {
        icon: 'pi pi-trash',
        target: '_blank',
        url: 'https://www.just-eat.es/restaurants-flor-de-loto-segovia/menu?utm_source=google&utm_medium=organic&utm_campaign=orderaction'
      }
    ];
  }

  social() {
    this.itemsSocial = [
      {
        icon: 'pi pi-facebook',
        target: '_blank',
        url: 'https://glovoapp.com/es/es/segovia/flor-de-loto-segovia/?utm_source=google&utm_medium=organic&utm_campaign=google_reserve_place_order_action'
      },
      {
        icon: 'pi pi-instagram',
        target: '_blank',
        url: 'https://glovoapp.com/es/es/segovia/flor-de-loto-segovia/?utm_source=google&utm_medium=organic&utm_campaign=google_reserve_place_order_action'
      },
      {
        icon: 'pi pi-twitter',
        target: '_blank',
        url: 'https://www.just-eat.es/restaurants-flor-de-loto-segovia/menu?utm_source=google&utm_medium=organic&utm_campaign=orderaction'
      }
    ];
  }
}



