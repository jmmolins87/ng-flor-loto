import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CookiesComponent } from './components/cookies/cookies.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CookiesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
