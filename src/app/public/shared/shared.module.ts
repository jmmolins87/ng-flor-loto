import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';
import { SpeedDialComponent } from './components/speed-dial/speed-dial.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CookiesComponent,
    WhatsappComponent,
    SpeedDialComponent
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
    WhatsappComponent,
    SpeedDialComponent
  ]
})
export class SharedModule { }
