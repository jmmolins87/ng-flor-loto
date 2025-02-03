import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { SpeedDialModule } from 'primeng/speeddial';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';


@NgModule({
  exports: [
    ButtonModule,
    CarouselModule,
    DialogModule,
    ImageModule,
    InputTextareaModule,
    InputTextModule,
    RatingModule,
    ScrollTopModule,
    SkeletonModule,
    SpeedDialModule,
    TabViewModule,
    ToastModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PrimeNgModule { }
