import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module'

import { AccountStatsRoutingModule } from './account-stats-routing.module';
import { AccountStatsComponent } from './account-stats.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    AccountStatsRoutingModule
  ],
  declarations: [AccountStatsComponent]
})
export class AccountStatsModule { }
