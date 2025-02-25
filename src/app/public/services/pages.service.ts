import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { 
  homePageCarouselHero, 
  homePageOpinions, 
  homePageRecomendations 
} from '../db/home.db';
import { bouquetFlower } from '../db/bouquetFlowers.db';
import { 
  rouses, 
  orchids, 
  moreFloors 
} from '../db/floors.db';
import { terrarium } from '../db/terrarium.db';
import { funerals } from '../db/funerals.db';
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

  // ** Get recommendations **
  get recommendationsHome() {
    return new Observable<recomendationsHome[]>(observer => {
      // Get items from db
      observer.next(homePageRecomendations);
      // Complete observable
      observer.complete();
    });
  }

  // ** Get recommendations **
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

  // ** Rouses Page **
  get rousesPage() {
    return new Observable<cardsInterface[]>(observer => {
      // Get items from db
      observer.next(rouses);
      // Complete observable
      observer.complete();
    })
  }

  // ** Orchids Page **
  get orchidsPage() {
    return new Observable<cardsInterface[]>(observer => {
      // Get items from db
      observer.next(orchids);
      // Complete observable
      observer.complete();
    })
  }

  // ** MoreFloors Page **
  get moreFloorsPage() {
    return new Observable<cardsInterface[]>(observer => {
      // Get items from db
      observer.next(moreFloors);
      // Complete observable
      observer.complete();
    })
  }

  // ** Terrarium Page **
  get terrariumPage() {
    return new Observable<cardsInterface[]>(observer => {
      // Get items from db
      observer.next(terrarium);
      // Complete observable
      observer.complete();
    })
  }

  // ** Fuenrals Page **
  get funeralsPage() {
    return new Observable<cardsInterface[]>(observer => {
      // Get items from db
      observer.next(funerals);
      // Complete observable
      observer.complete();
    })
  }

}