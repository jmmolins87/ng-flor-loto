import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {
  showBanner: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.checkCookies();
  }

  checkCookies(): void {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted) {
      this.showBanner = false;
    }
  }

  acceptCookies(): void {
    localStorage.setItem('cookiesAccepted', 'true');
    this.showBanner = false;
  }
}