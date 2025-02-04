

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CookiePolicyComponent } from './policies/cookie-policy/cookie-policy.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LegalNoticeComponent } from './policies/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './policies/privacy-policy/privacy-policy.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "brunchflowers",
        component: AboutComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: 'legal',
        component: LegalNoticeComponent
    },
    {
        path: 'cookies',
        component: CookiePolicyComponent
    },
    {
        path: 'privacity',
        component: PrivacyPolicyComponent
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