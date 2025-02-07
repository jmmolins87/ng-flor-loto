import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { 
  homePageCarouselHero, 
  homePageOpinions, 
  homePageRecomendations 
} from '../db/home.db';

import { 
  carrouselHero, 
  carrouselOpinions, 
  recomendationsHome 
} from '../models/home/contentHomePage.interface';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor() { }

  // Get recommendations
  get carouselHeroHome() {
    return new Observable<carrouselHero[]>(observer => {
      // Get items from db
      observer.next(homePageCarouselHero);
      // Complete observable
      observer.complete();
    });
  }

  // Get recommendations
  get recommendationsHome() {
    return new Observable<recomendationsHome[]>(observer => {
      // Get items from db
      observer.next(homePageRecomendations);
      // Complete observable
      observer.complete();
    });
  }

  // Get recommendations
  get opinionsHome() {
    return new Observable<carrouselOpinions[]>(observer => {
      // Get items from db
      observer.next(homePageOpinions);
      // Complete observable
      observer.complete();
    });
  }
}
