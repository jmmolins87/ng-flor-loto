import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { GalleriaModule } from 'primeng/galleria';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { CardComponent } from './card/card.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { FlowerBackgroundComponent } from './flower-background/flower-background.component';
import { TypewriterAnimationComponent } from './typewriter-animation/typewriter-animation.component';
import { GalleryImageComponent } from './gallery-image/gallery-image.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    CardComponent,
    CarrouselComponent,
    FlowerBackgroundComponent,
    TypewriterAnimationComponent,
    GalleryImageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
    TranslateModule,
    GalleriaModule,
    PipesModule
  ],
  exports: [
    CardComponent,
    CarrouselComponent,
    FlowerBackgroundComponent,
    TypewriterAnimationComponent,
    GalleryImageComponent,
  ]
})
export class ComponentsModule { }
