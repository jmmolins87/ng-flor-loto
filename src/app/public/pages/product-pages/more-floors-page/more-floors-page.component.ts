import { Component } from '@angular/core';

import { PagesService } from '../../../services/pages.service';

import { cardsInterface } from '../../../models/cards/cards.interface';

@Component({
  selector: 'app-more-floors-page',
  templateUrl: './more-floors-page.component.html',
  styleUrls: ['./../product-pages.component.scss']
})
export class MoreFloorsPageComponent {

  public showSkeletonTitle: boolean = true;
  public showSkeleton: boolean = true;
  public moreFloorsContent: cardsInterface[] = [];
  
  constructor( private _pagesService: PagesService ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showSkeletonTitle = false;
    }, 1500);
    this.getMoreFloors();
  }
  
  getMoreFloors() {
    this._pagesService.moreFloorsPage.subscribe(moreFloors=> {
      this.moreFloorsContent = moreFloors
      this.showSkeleton = false;
    })
    return this.moreFloorsContent;
  }

}
