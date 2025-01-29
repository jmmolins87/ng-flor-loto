import { Component, ViewChild } from '@angular/core';
import { 
  NavigationEnd, 
  Router, 
  Event 
} from '@angular/router';

import { MenuItem, PrimeNGConfig } from 'primeng/api';

import { SharedService } from './public/shared/services/shared.service';
import { WhatsappComponent } from './public/shared/components/whatsapp/whatsapp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public visible: boolean = false;
  public itemsShop: MenuItem[] = [];
  public itemsSocial: MenuItem[] = [];

  @ViewChild(WhatsappComponent) 
  public whatsappComponent!: WhatsappComponent;

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

  shopping() {
    this.itemsShop = [
      {
        label: 'Whatsapp',
        image: 'assets/img/icons-dial/whatsapp.svg',
        command: () => {
          this.whatsappComponent.triggerShowDialog();
        }
      },
      {
        label: 'Glovo',
        image: 'assets/img/icons-dial/glovo.svg',
        command: () => {
          window.open('https://glovoapp.com/es/es/segovia/flor-de-loto-segovia/?utm_source=google&utm_medium=organic&utm_campaign=google_reserve_place_order_action', '_blank');
        }
      },
      {
        label: 'Just Eat',
        image: 'assets/img/icons-dial/just-eat.svg',
        command: () => {
          window.open('https://www.just-eat.es/restaurants-flor-de-loto-segovia/menu?utm_source=google&utm_medium=organic&utm_campaign=orderaction', '_blank');
        }
      }
    ];
  }

  social() {
    this.itemsSocial = [
      {
        label: 'Facebook',
        image: 'assets/img/icons-dial/facebook.svg',
        command: () => {
          window.open('https://www.facebook.com/FlorDeLotoSegovia', '_blank');
        }
      },
      {
        label: 'Instagram',
        image: 'assets/img/icons-dial/instagram.svg',
        command: () => {
          window.open('https://www.instagram.com/flordelotosegovia/', '_blank');
        }
      }
    ];
  }
}



