import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';

import { TranslateModule } from '@ngx-translate/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { MessageService } from 'primeng/api';

import { ComponentsModule } from '../components/components.module';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CookiePolicyPageComponent } from './policies-pages/cookie-policy-page/cookie-policy-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LegalNoticePageComponent } from './policies-pages/legal-notice-page/legal-notice-page.component';
import { PrivacyPolicyPageComponent } from './policies-pages/privacy-policy-pages/privacy-policy-page.component';
import { TerrariumsPageComponent } from './terrariums-page/terrariums-page.component';


@NgModule({
  declarations: [
    ContactPageComponent,
    CookiePolicyPageComponent,
    ErrorPageComponent,
    HomePageComponent,
    LegalNoticePageComponent,
    PrivacyPolicyPageComponent,
    TerrariumsPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    TranslateModule,
    PrimeNgModule
  ],
  providers: [MessageService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class PagesModule { }
