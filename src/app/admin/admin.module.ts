import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { PrimeNgAdminModule } from './prime-ng-admin/prime-ng-admin.module';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    PrimeNgAdminModule
  ],
  exports: [
    DashboardComponent,
    LoginComponent
  ]
})
export class AdminModule { }
