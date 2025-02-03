import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { SpeedDialComponent } from './components/speed-dial/speed-dial.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CookiesComponent,
    SpeedDialComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule,
    HttpClientModule,
    PrimeNgModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CookiesComponent,
    SpeedDialComponent
  ]
})
export class SharedModule { }
