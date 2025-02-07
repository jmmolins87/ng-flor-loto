

import { Component, OnInit } from '@angular/core';


import { PagesService } from '../../services/pages.service';

import { 
  carrouselHero, 
  carrouselOpinions, 
  recomendationsHome 
} from '../../models/home/contentHomePage.interface';

import { carrouselOptions } from '../../components/carrousel/carrousel.config';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showSkeleton: boolean = true;
  public carrouselHero: any | carrouselOptions = carrouselOptions.isHero;
  public carrouselOpinator: carrouselOptions = carrouselOptions.isOpinator;
  public intervalCarrouselHero: number = 7500;
  public intervalCarrouselOpinions: number = 5000;
  public itemsCarrouselHero: carrouselHero[] = [];
  public recommendationsHome: recomendationsHome[] = [];
  public opinionsHome: carrouselOpinions[] = [];

  constructor( private _pagesService: PagesService ) {}

  ngOnInit() {
    setTimeout(() => {
      this.showSkeleton = false;
    }, 1500)
    this.getRecommendations();
    this.getOpinions();
    this.getSlidesHero();
  }

  getSlidesHero() {
    this._pagesService.carouselHeroHome.subscribe(slide => {
      this.itemsCarrouselHero = slide;
    })
    return this.itemsCarrouselHero;
  }

  getRecommendations() {
    this._pagesService.recommendationsHome.subscribe(recommendations => {
      this.recommendationsHome = recommendations;
    });
    return this.recommendationsHome;  
  }

  getOpinions() {
    this._pagesService.opinionsHome.subscribe(opinions => {
      this.opinionsHome = opinions;
    });
    return this.opinionsHome;
  }

}