import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { 
  homePageCarouselHero, 
  homePageOpinions, 
  homePageRecomendations 
} from '../db/home.db';
import { bouquetFlower } from '../db/bouquetFlowers.db';

import { 
  carrouselHero, 
  carrouselOpinions, 
  recomendationsHome 
} from '../models/home/contentHomePage.interface';
import { cardsInterface } from '../models/cards/cards.interface';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor() { }


  // ** Home Page **
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
  
  // ** Bouquets Page **
  // Get recommendations
  get bouquetsPage() {
    return new Observable<cardsInterface[]>(observer => {
      // Get items from db
      observer.next(bouquetFlower);
      // Complete observable
      observer.complete();
    });
  }

}
