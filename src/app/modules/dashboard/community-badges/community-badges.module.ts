import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module'

import { CommunityBadgesRoutingModule } from './community-badges-routing.module';
import { CommunityBadgesComponent } from './community-badges.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    CommunityBadgesRoutingModule
  ],
  declarations: [CommunityBadgesComponent]
})
export class CommunityBadgesModule { }
