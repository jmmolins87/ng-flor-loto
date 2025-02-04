

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LegalNoticeComponent } from './policies/legal-notice/legal-notice.component';
import { CookiePolicyComponent } from './policies/cookie-policy/cookie-policy.component';
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
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }