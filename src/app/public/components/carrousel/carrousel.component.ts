import { 
  Component, 
  Input, 
  OnInit 
} from '@angular/core';

import { carrouselOptions } from './carrousel.config';
import { carrouselHero, carrouselOpinions } from '../../models/home/contentHomePage.interface';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {

  @Input()
  public itemsCarrouselHero: carrouselHero[] = [];
  @Input()
  public valueRating: number = 0;
  @Input()
  public carrouselOptions!: carrouselOptions;
  @Input()
  public intervalHero: number = 7500;
  @Input()
  public intervalOpinions: number = 5000;
  @Input()
  public homePageOpinions: carrouselOpinions[] = []

  public responsiveOptions: any[] | undefined;
  public displayModalHero: boolean = false;
  public displayModalOpinator: boolean = false;
  public selectedSlideHero: any;
  public selectedSlideOpinator: any;
  public showSkeleton: boolean = true;

  constructor() {}

  ngOnInit() {
    this.resposnsiveOptionsModal();
    setTimeout(()=> {
      this.showSkeleton = false;
    }, 1000);
  }

  resposnsiveOptionsModal() {
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

  openModalHero(slideHero: any) {
    this.selectedSlideHero = slideHero;
    this.displayModalHero = true;
  }

  openModalOpinator(opinion: any) {
    this.selectedSlideOpinator = opinion;
    this.displayModalOpinator = true;
  }

}
