import { Component, OnInit } from '@angular/core';

import { PagesService } from '../../../services/pages.service';

import { cardsInterface } from '../../../models/cards/cards.interface';

@Component({
  selector: 'app-orchids-page',
  templateUrl: './orchids-page.component.html',
  styleUrls: ['./../product-pages.component.scss']
})
export class OrchidsPageComponent implements OnInit {

  public showSkeletonTitle: boolean = true;
  public showSkeleton: boolean = true;
  public orchidsContent: cardsInterface[] = [];
  
  constructor( private _pagesService: PagesService ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showSkeletonTitle = false;
    }, 1500);
    this.getOrchids();
  }
  
  getOrchids() {
    this._pagesService.orchidsPage.subscribe(orchids=> {
      this.orchidsContent = orchids
      this.showSkeleton = false;
    })
    return this.orchidsContent;
  }

}
