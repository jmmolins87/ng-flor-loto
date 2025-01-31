import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { MessageService } from 'primeng/api';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ComponentsModule } from '../components/components.module';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    TranslateModule,
    PrimeNgModule
  ],
  exports: [
    HomeComponent,
    AboutComponent
  ],
  providers: [MessageService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PagesModule { }
