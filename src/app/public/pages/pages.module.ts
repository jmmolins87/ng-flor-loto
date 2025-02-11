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
import { TerrariumsPageComponent } from './product-pages/terrariums-page/terrariums-page.component';
import { BouquetFlowersPageComponent } from './product-pages/bouquet-flowers-page/bouquet-flowers-page.component';
import { FloorsPageComponent } from './product-pages/floors-page/floors-page.component';
import { WeddingEventsPageComponent } from './product-pages/wedding-events-page/wedding-events-page.component';
import { FuneralsPageComponent } from './product-pages/funerals-page/funerals-page.component';
import { RousesPageComponent } from './product-pages/rouses-page/rouses-page.component';
import { OrchidsPageComponent } from './product-pages/orchids-page/orchids-page.component';
import { MoreFloorsPageComponent } from './product-pages/more-floors-page/more-floors-page.component';


@NgModule({
  declarations: [
    ContactPageComponent,
    CookiePolicyPageComponent,
    ErrorPageComponent,
    HomePageComponent,
    LegalNoticePageComponent,
    PrivacyPolicyPageComponent,
    TerrariumsPageComponent,
    BouquetFlowersPageComponent,
    FloorsPageComponent,
    WeddingEventsPageComponent,
    FuneralsPageComponent,
    RousesPageComponent,
    OrchidsPageComponent,
    MoreFloorsPageComponent
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
