import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module'
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NewsFeedModule } from './news-feed/news-feed.module';

import { DashboardComponent } from './dashboard.component';
import { TypographyComponent } from '../../core/components/typography/typography.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    DashboardRoutingModule,
    NewsFeedModule
  ],
  declarations: [
    DashboardComponent,
    TypographyComponent
  ],
  exports: [
    CoreModule
  ]
})
export class DashboardModule { }
