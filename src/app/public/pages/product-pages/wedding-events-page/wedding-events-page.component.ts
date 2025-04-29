import { Component, OnInit } from '@angular/core';

import { PagesService } from '../../../services/pages.service';

import { cardsInterface } from '../../../models/cards/cards.interface';


@Component({
  selector: 'app-wedding-events-page',
  templateUrl: './wedding-events-page.component.html',
  styleUrls: ['./../product-pages.component.scss']
})
export class WeddingEventsPageComponent implements OnInit {

  public showSkeletonTitle: boolean = true;
  public showSkeleton: boolean = true;
  public weddingsContent: cardsInterface[] = [];

  constructor( private _pagesService: PagesService ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showSkeletonTitle = false;
    }, 1500);
    this.getWeddings();
  }

  getWeddings() {
    this._pagesService.weddingsPage.subscribe(wedding => {
      this.weddingsContent = wedding
      this.showSkeleton = false;
    })
    return this.weddingsContent;
  }

}
