import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RatingModule } from 'primeng/rating';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { SpeedDialModule } from 'primeng/speeddial';


@NgModule({
  exports: [
    ButtonModule,
    CarouselModule,
    DialogModule,
    ImageModule,
    InputTextModule,
    InputTextareaModule,
    RatingModule,
    ScrollTopModule,
    SkeletonModule,
    SpeedDialModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PrimeNgModule { }
