import { 
  Component, 
  Input, 
  OnInit 
} from '@angular/core';

import { carrouselOptions } from './carrousel.config';
import { carrouselHero } from '../../models/home/carrouselHero.interface';
import { carrouselOpinions } from '../../models/home/carrouselOpinions.interface';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {

  @Input()
  public itemsCarrouselHero: carrouselHero[] = [];
  @Input()
  public itemsCarrouselOpinator: carrouselOpinions[] = [];
  @Input()
  public valueRating: number = 0;
  @Input()
  public carrouselOptions!: carrouselOptions;
  @Input()
  public intervalHero: number = 7500;
  @Input()
  public intervalOpinions: number = 5000;

  public responsiveOptions: any[] | undefined;
  public displayModalHero: boolean = false;
  public displayModalOpinator: boolean = false;
  public selectedSlide: any;
  public selectedProduct: any;

  constructor() {}

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  openModalSlide(slide: any) {
    this.selectedSlide = slide;
    this.displayModalHero = true;
  }

  openModalOpinator(product: any) {
    this.selectedProduct = product;
    this.displayModalOpinator = true;
  }

}
