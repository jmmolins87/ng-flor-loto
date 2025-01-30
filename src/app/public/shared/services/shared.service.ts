import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { navbarItems } from '../db/navbaritems.db';
import { footerItemsContact, footerItemsPolicies } from '../db/footer.items.db';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private router: Router) { }

  isAdminRoute(): boolean {
    return this.router.url.startsWith('/admin');
  }

  get itemsNavbar() {
    return new Observable<any>(observer => {
      // Get items from db
      observer.next(navbarItems);
      // Complete observable
      observer.complete();
    });
  }

  get itemsFooterPolicies() {
    return new Observable<any>(observer => {
      // Get items from db
      observer.next(footerItemsPolicies);
      // Complete observable
      observer.complete();
    });
  }

  get itemsFooterContact() {
    return new Observable<any>(observer => {
      // Get items from db
      observer.next(footerItemsContact);
      // Complete observable
      observer.complete();
    });
  }
}
