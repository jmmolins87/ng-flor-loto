import { Component } from '@angular/core';


import { PagesService } from 'src/app/public/services/pages.service';

import { cardsInterface } from 'src/app/public/models/cards/cards.interface';

@Component({
  selector: 'app-funerals-page',
  templateUrl: './funerals-page.component.html',
  styleUrls: ['./../product-pages.component.scss']
})
export class FuneralsPageComponent {

  public showSkeletonTitle: boolean = true;
  public showSkeleton: boolean = true;
  public funeralsContent: cardsInterface[] = [];
  
  constructor( private _pagesService: PagesService ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showSkeletonTitle = false;
    }, 1500);
    this.getFunerals();
  }
  
  getFunerals() {
    this._pagesService.funeralsPage.subscribe(funerals => {
      this.funeralsContent = funerals;
      this.showSkeleton = false;
    })
    return this.funeralsContent;
  }

}
