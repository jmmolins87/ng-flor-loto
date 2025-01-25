import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypewriterAnimationComponent } from './typewriter-animation/typewriter-animation.component';
import { FlowerBackgroundComponent } from './flower-background/flower-background.component';




@NgModule({
  declarations: [
    TypewriterAnimationComponent,
    FlowerBackgroundComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    TypewriterAnimationComponent,
    FlowerBackgroundComponent
  ]
})
export class ComponentsModule { }
