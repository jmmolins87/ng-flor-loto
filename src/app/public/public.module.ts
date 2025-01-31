import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { AdminModule } from '../admin/admin.module';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    PagesModule,
    AdminModule,
    ComponentsModule
  ],
  exports: [
    SharedModule,
    HttpClientModule,
    TranslateModule,
    PagesModule,
    AdminModule,
    ComponentsModule
  ]
})
export class PublicModule { }
