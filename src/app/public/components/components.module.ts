import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { TypewriterAnimationComponent } from './typewriter-animation/typewriter-animation.component';
import { FlowerBackgroundComponent } from './flower-background/flower-background.component';
import { CarrouselComponent } from './carrousel/carrousel.component';




@NgModule({
  declarations: [
    TypewriterAnimationComponent,
    FlowerBackgroundComponent,
    CarrouselComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
    TranslateModule
  ], 
  exports: [
    TypewriterAnimationComponent,
    FlowerBackgroundComponent,
    CarrouselComponent
  ]
})
export class ComponentsModule { }
