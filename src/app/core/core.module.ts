import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './layout/header/header.component';
import { SidebarLeftComponent } from './layout/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './layout/sidebar-right/sidebar-right.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    SidebarLeftComponent,
    SidebarRightComponent
  ],
  exports: [
    HeaderComponent,
    SidebarLeftComponent,
    SidebarRightComponent
  ]
})
export class CoreModule { }
