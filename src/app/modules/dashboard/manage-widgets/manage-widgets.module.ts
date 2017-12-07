import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module'

import { ManageWidgetsRoutingModule } from './manage-widgets-routing.module';
import { ManageWidgetsComponent } from './manage-widgets.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ManageWidgetsRoutingModule
  ],
  declarations: [ManageWidgetsComponent]
})
export class ManageWidgetsModule { }
