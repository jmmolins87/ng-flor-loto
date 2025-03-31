import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultImagePipe } from './defaultImage.pipe';


@NgModule({
  declarations: [
    DefaultImagePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DefaultImagePipe
  ]
})
export class PipesModule { }
