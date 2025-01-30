import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { homePageRecomendations } from '../db/home.db';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor() { }

  // Get recommendations
  get recommendations() {
    return new Observable<any[]>(observer => {
      // Get items from db
      observer.next(homePageRecomendations);
      // Complete observable
      observer.complete();
    });
  }
}
