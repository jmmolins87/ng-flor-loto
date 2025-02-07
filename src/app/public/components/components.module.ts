import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { CardComponent } from './card/card.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { FlowerBackgroundComponent } from './flower-background/flower-background.component';
import { TypewriterAnimationComponent } from './typewriter-animation/typewriter-animation.component';




@NgModule({
  declarations: [
    CardComponent,
    CarrouselComponent,
    FlowerBackgroundComponent,
    TypewriterAnimationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
    TranslateModule
  ], 
  exports: [
    CardComponent,
    CarrouselComponent,
    FlowerBackgroundComponent,
    TypewriterAnimationComponent
  ]
})
export class ComponentsModule { }
