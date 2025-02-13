

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BouquetFlowersPageComponent } from './product-pages/bouquet-flowers-page/bouquet-flowers-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CookiePolicyPageComponent } from './policies-pages/cookie-policy-page/cookie-policy-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FloorsPageComponent } from './product-pages/floors-page/floors-page.component';
import { FuneralsPageComponent } from './product-pages/funerals-page/funerals-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LegalNoticePageComponent } from './policies-pages/legal-notice-page/legal-notice-page.component';
import { MoreFloorsPageComponent } from './product-pages/more-floors-page/more-floors-page.component';
import { OrchidsPageComponent } from './product-pages/orchids-page/orchids-page.component';
import { PrivacyPolicyPageComponent } from './policies-pages/privacy-policy-pages/privacy-policy-page.component';
import { RousesPageComponent } from './product-pages/rouses-page/rouses-page.component';
import { TerrariumsPageComponent } from './product-pages/terrariums-page/terrariums-page.component';
import { WeddingEventsPageComponent } from './product-pages/wedding-events-page/wedding-events-page.component';


const routes: Routes = [
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: "ramos-flores-segovia",
        component: BouquetFlowersPageComponent
    },
    {
        path: "plantas-segovia",
        component: FloorsPageComponent
    },
    {
        path: "rosas-segovia",
        component: RousesPageComponent
    },
    {
        path: "orquideas-segovia",
        component: OrchidsPageComponent
    },
    {
        path: "mas-flores-segovia",
        component: MoreFloorsPageComponent
    },
    {
        path: "terrarios-segovia",
        component: TerrariumsPageComponent
    },
    {
        path: "bodas-eventos-segovia",
        component: WeddingEventsPageComponent
    },
    {
        path: "funerales-segovia",
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