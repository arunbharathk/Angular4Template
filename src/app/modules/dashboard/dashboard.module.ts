import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../../core/layout/header/header.component';
import { SidebarLeftComponent } from '../../core/layout/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from '../../core/layout/sidebar-right/sidebar-right.component';
import { TypographyComponent } from '../../core/components/typography/typography.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    SidebarLeftComponent,
    HeaderComponent,
    SidebarRightComponent,
    TypographyComponent
  ]
})
export class DashboardModule { }
