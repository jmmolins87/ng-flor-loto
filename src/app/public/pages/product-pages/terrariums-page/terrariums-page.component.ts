import { Component, OnInit } from '@angular/core';
import { cardsInterface } from '../../../models/cards/cards.interface';

@Component({
  selector: 'app-terrariums-page',
  templateUrl: './terrariums-page.component.html',
  styleUrls: ['./../product-pages.component.scss']
})
export class TerrariumsPageComponent implements OnInit {

  public showSkeleton: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.showSkeleton = false;
    }, 1500)
  }

  cardContent: cardsInterface[] = [
    {
      srcImg: "https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg",
      titleCard: "Card 1",
      descriptionCard: "Description 1"
    },
    {
      srcImg: "https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg",
      titleCard: "Card 2",
      descriptionCard: "Description 2"
    },
    {
      srcImg: "https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg",
      titleCard: "Card 3",
      descriptionCard: "Description 3"
    },
    {
      srcImg: "https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg",
      titleCard: "Card 4",
      descriptionCard: "Description 4"
    },
    {
      srcImg: "https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg",
      titleCard: "Card 5",
      descriptionCard: "Description 5"
    },
    {
      srcImg: "https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg",
      titleCard: "Card 6",
      descriptionCard: "Description 6"
    },
    {
      srcImg: "https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg",
      titleCard: "Card 7",
      descriptionCard: "Description 7"
    },
    {
      srcImg: "https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg",
      titleCard: "Card 8",
      descriptionCard: "Description 8"
    }
  ] 

}
