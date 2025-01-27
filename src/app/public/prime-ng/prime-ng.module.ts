import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { RatingModule } from 'primeng/rating';
import { ScrollTopModule } from 'primeng/scrolltop';


@NgModule({
  exports: [
    ButtonModule,
    CarouselModule,
    DialogModule,
    ImageModule,
    RatingModule,
    ScrollTopModule
  ]
})
export class PrimeNgModule { }
