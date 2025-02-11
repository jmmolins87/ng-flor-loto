import { Component, OnInit } from '@angular/core';

import { cardsInterface } from '../../../models/cards/cards.interface';
import { PagesService } from '../../../services/pages.service';

@Component({
  selector: 'app-bouquet-flowers-page',
  templateUrl: './bouquet-flowers-page.component.html',
  styleUrls: ['./../product-pages.component.scss']
})
export class BouquetFlowersPageComponent implements OnInit {

  public showSkeleton: boolean = true;
  public bouquetsContent: cardsInterface[] = [];

  constructor( private _pagesService: PagesService ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showSkeleton = false;
    }, 1500);
    this.getBouquets();
  }
  
  getBouquets() {
    this._pagesService.bouquetsPage.subscribe(bouquet => {
      this.bouquetsContent = bouquet;
    })
    return this.bouquetsContent;
    this.showSkeleton = false;
  }

}
