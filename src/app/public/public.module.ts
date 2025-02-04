import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

import { AdminModule } from '../admin/admin.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    ComponentsModule,
    PagesModule,
    PublicRoutingModule,
    SharedModule
  ],
  exports: [
    AdminModule,
    ComponentsModule,
    HttpClientModule,
    PagesModule,
    SharedModule,
    TranslateModule
  ]
})
export class PublicModule { }
