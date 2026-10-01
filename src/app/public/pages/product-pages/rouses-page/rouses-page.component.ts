import { Component, OnInit } from '@angular/core';

import { PagesService } from '../../../services/pages.service';

import { cardsInterface } from '../../../models/cards/cards.interface';


@Component({
  selector: 'app-rouses-page',
  templateUrl: './rouses-page.component.html',
  styleUrls: ['./../product-pages.component.scss']
})
export class RousesPageComponent implements OnInit {

  public showSkeletonTitle: boolean = true;
  public showSkeleton: boolean = true;
  public rousesContent: cardsInterface[] = [];

  constructor( private _pagesService: PagesService ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showSkeletonTitle = false;
    }, 1500);
    this.getRouses();
  }
  
  getRouses() {
    this._pagesService.rousesPage.subscribe(rouses=> {
      this.rousesContent = rouses
      this.showSkeleton = false;
    })
    return this.rousesContent;
  }

}
