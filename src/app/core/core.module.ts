import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardModule } from '../modules/dashboard/dashboard.module';
import { LandingPageModule } from '../modules/landing-page/landing-page.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LandingPageModule,
    DashboardModule
  ],
  declarations: []
})
export class CoreModule { }
