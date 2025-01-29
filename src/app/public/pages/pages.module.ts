import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule,
    TranslateModule,
    PrimeNgModule
  ],
  exports: [
    HomeComponent,
    AboutComponent
  ]
})
export class PagesModule { }
