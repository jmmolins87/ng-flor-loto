import { Component, OnInit } from '@angular/core';

import { PagesService } from '../../../services/pages.service';

import { cardsInterface } from '../../../models/cards/cards.interface';

@Component({
  selector: 'app-terrariums-page',
  templateUrl: './terrariums-page.component.html',
  styleUrls: ['./../product-pages.component.scss']
})
export class TerrariumsPageComponent implements OnInit {

  public showSkeletonTitle: boolean = true;
  public showSkeleton: boolean = true;
  public terrariumContent: cardsInterface[] = [];

  constructor( private _pagesService: PagesService ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showSkeletonTitle = false;
    }, 1500);
    this.getTerrarium();
  }

  getTerrarium() {
    this._pagesService.terrariumPage.subscribe(terrarium => {
      this.terrariumContent = terrarium
      this.showSkeleton = false;
    })
    return this.terrariumContent;
  }
}
