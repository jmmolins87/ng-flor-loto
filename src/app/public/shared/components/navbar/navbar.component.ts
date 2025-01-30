import { Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { TranslatorService } from '../../../services/translator.service';
import { SharedService } from '../../services/shared.service';

import { NavBarInterface } from '../../models/nav-bar.interface';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  // Items Menu
  public menuItems!: NavBarInterface[] | any[];
  // When user scrolls page
  public scrolled: boolean = false;
  // It is bigger than a tablet
  public isTablet: boolean = false;
  // Traductor
  public langs: { lang: string, name: string }[] = [
    { lang: 'es', name: 'Español' },
    { lang: 'en', name: 'English' }
  ];

  constructor(
    private _breakpointObserver: BreakpointObserver, 
    private _translator: TranslatorService,
    private _sharedService: SharedService 
  ) { }
  ngOnInit(): void {
    this.removeAttr();
    this.getItemsNavbar();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 0;
  }

  // Detect resize
  removeAttr() {
    this._breakpointObserver.observe([Breakpoints.Web, Breakpoints.Medium])
      .subscribe(result => {
        this.isTablet = result.matches;
      })
  }

  // Change Language
  changeLang(lang: string) {
    this._translator.changeLang(lang);
  }

  // Get Items Navbar
  getItemsNavbar() {
    this._sharedService.itemsNavbar.subscribe(itemsNavbar => {
      this.menuItems = itemsNavbar;
    })
    return this.menuItems;
  }
}