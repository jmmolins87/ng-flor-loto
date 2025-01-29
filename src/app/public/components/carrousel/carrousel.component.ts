import { 
  Component, 
  Input, 
  OnInit 
} from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {

  @Input()
  public itemsCarrousel: any [] = [];
  @Input()
  public valueRating: number = 0;

  public responsiveOptions: any[] | undefined;
  public displayModal: boolean = false;
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

  openModal(product: any) {
    this.selectedProduct = product;
    this.displayModal = true;
  }

}
