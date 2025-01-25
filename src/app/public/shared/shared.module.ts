import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CookiesComponent,
    WhatsappComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimeNgModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CookiesComponent,
    WhatsappComponent
  ]
})
export class SharedModule { }
