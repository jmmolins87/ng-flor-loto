import { Component, OnInit } from '@angular/core';

import { PagesService } from '../../../services/pages.service';

import { cardsInterface } from '../../../models/cards/cards.interface';

@Component({
  selector: 'app-bouquet-flowers-page',
  templateUrl: './bouquet-flowers-page.component.html',
  styleUrls: ['./../product-pages.component.scss']
})
export class BouquetFlowersPageComponent implements OnInit {

  public showSkeletonTitle: boolean = true;
  public showSkeleton: boolean = true;
  public bouquetsContent: cardsInterface[] = [];

  constructor( private _pagesService: PagesService ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showSkeletonTitle = false;
    }, 1500);
    this.getBouquets();
  }
  
  getBouquets() {
    this._pagesService.bouquetsPage.subscribe(bouquet => {
      this.bouquetsContent = bouquet;
      this.showSkeleton = false;
    })
    return this.bouquetsContent;
  }

}
