import { Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { NavBarInterface } from '../../models/nav-bar.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public menuItems: NavBarInterface[] = [
    {
      label: "Ramos de flores",
      link: ["/flowers"]
    },
    {
      label: "Ramos de Rosas",
      link: ["/roses"]
    },
    {
      label: "Plantas",
      link: ["/floors"]
    },
    {
      label: "Bodas",
      link: ["/weddings"]
    },
    {
      label: "Funerales",
      link: ["/funerals"]
    },
    {
      label: "Contacto",
      link: ["/contact"]
    }
  ]
  // When user scrolls page
  public scrolled: boolean = false;
  // It is bigger than a tablet
  public isTablet: boolean = false;

  constructor( private _breakpointObserver: BreakpointObserver ) { }
  ngOnInit(): void {
    this.removeAttr();
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
}