

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BouquetFlowersPageComponent } from './bouquet-flowers-page/bouquet-flowers-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CookiePolicyPageComponent } from './policies-pages/cookie-policy-page/cookie-policy-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FloorsPageComponent } from './floors-page/floors-page.component';
import { FuneralsPageComponent } from './funerals-page/funerals-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LegalNoticePageComponent } from './policies-pages/legal-notice-page/legal-notice-page.component';
import { PrivacyPolicyPageComponent } from './policies-pages/privacy-policy-pages/privacy-policy-page.component';
import { TerrariumsPageComponent } from './terrariums-page/terrariums-page.component';
import { WeddingEventsPageComponent } from './wedding-events-page/wedding-events-page.component';


const routes: Routes = [
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: "bouquetflower",
        component: BouquetFlowersPageComponent
    },
    {
        path: "floors",
        component: FloorsPageComponent
    },
    {
        path: "terrariums",
        component: TerrariumsPageComponent
    },
    {
        path: "wedding",
        component: WeddingEventsPageComponent
    },
    {
        path: "funerals",
        component: FuneralsPageComponent
    },
    {
        path: "contact",
        component: ContactPageComponent
    },
    {
        path: 'legal',
        component: LegalNoticePageComponent
    },
    {
        path: 'cookies',
        component: CookiePolicyPageComponent
    },
    {
        path: 'privacity',
        component: PrivacyPolicyPageComponent
    },
    {
        path: '404',
        component: ErrorPageComponent
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }