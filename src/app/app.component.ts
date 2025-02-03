import { 
  Component, 
  OnInit, 
  ViewChild 
} from '@angular/core';
import { 
  NavigationEnd, 
  Router, 
  Event 
} from '@angular/router';

import { MenuItem, PrimeNGConfig } from 'primeng/api';

import { CookieService } from 'ngx-cookie-service';

import { SharedService } from './public/shared/services/shared.service';

import { ModalMessageComponent } from './public/shared/components/modal-message/modal-message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public itemsShop: MenuItem[] = [];
  public itemsSocial: MenuItem[] = [];
  public showDialogMessage: boolean = false;

  @ViewChild(ModalMessageComponent) 
  public modalMessageComponent!: ModalMessageComponent;

  constructor(
    public sharedService: SharedService, 
    private primengConfig: PrimeNGConfig,
    private _router: Router,
    private _cookieService: CookieService, 
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
        window.scrollTo(0, 0);
      }
    });
    this.shopping();
    this.social();
    this.getCookies();
  }

  getCookies() {
    // Set a cookie
    this._cookieService.set('user-visited', 'true', 7); // Cookie expires in 7 days
    // Get a cookie
    const userVisited = this._cookieService.get('user-visited');
    // Check if a cookie exists
    const hasVisited = this._cookieService.check('user-visited');
  }

  openModalMessage() {
    this.modalMessageComponent.showDialogMessage();
  }

  // ********** Data
  shopping() {
    this.itemsShop = [
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



