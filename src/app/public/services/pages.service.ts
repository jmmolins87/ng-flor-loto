import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { homePageOpinions, homePageRecomendations } from '../db/home.db';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor() { }

  // Get recommendations
  get recommendationsHome() {
    return new Observable<any[]>(observer => {
      // Get items from db
      observer.next(homePageRecomendations);
      // Complete observable
      observer.complete();
    });
  }

  // Get recommendations
  get opinionsHome() {
    return new Observable<any[]>(observer => {
      // Get items from db
      observer.next(homePageOpinions);
      // Complete observable
      observer.complete();
    });
  }
}
