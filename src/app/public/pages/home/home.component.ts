

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
  public carrouselHero: carrouselOptions = carrouselOptions.isHero;
  public carrouselOpinator: carrouselOptions = carrouselOptions.isOpinator;
  public intervalCarrouselHero: number = 7500;
  public intervalCarrouselOpinions: number = 5000;
  public recommendationsHome: recomendationsHome[] = []
  public opinionsHome: carrouselOpinions[] = []

  constructor( private _pagesService: PagesService ) {}

  ngOnInit() {
    setTimeout(() => {
      this.showSkeleton = false;
    }, 1500)
    this.getRecommendations();
    this.getOpinions();
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



  
  // ********************* Data *********************
  public itemsCarrouselHero: carrouselHero[] = [
    {
      title: "Slide 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus eros ac velit fringilla fermentum. Sed eget leo molestie justo malesuada mattis. In aliquam lobortis diam, nec tempus libero molestie eu. Vivamus elementum massa ut ligula convallis, sit amet imperdiet mi rhoncus. Donec tristique ultricies metus, eget egestas augue 1",
      img: "https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg"
    },
    {
      title: "Slide 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus eros ac velit fringilla fermentum. Sed eget leo molestie justo malesuada mattis. In aliquam lobortis diam, nec tempus libero molestie eu. Vivamus elementum massa ut ligula convallis, sit amet imperdiet mi rhoncus. Donec tristique ultricies metus, eget egestas augue 2",
      img: "https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg"
    },
    {
      title: "Slide 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus eros ac velit fringilla fermentum. Sed eget leo molestie justo malesuada mattis. In aliquam lobortis diam, nec tempus libero molestie eu. Vivamus elementum massa ut ligula convallis, sit amet imperdiet mi rhoncus. Donec tristique ultricies metus, eget egestas augue 3",
      img: "https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg"
    }
    , {
      title: "Slide 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus eros ac velit fringilla fermentum. Sed eget leo molestie justo malesuada mattis. In aliquam lobortis diam, nec tempus libero molestie eu. Vivamus elementum massa ut ligula convallis, sit amet imperdiet mi rhoncus. Donec tristique ultricies metus, eget egestas augue 4",
      img: "https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg"
    }
  ];

}