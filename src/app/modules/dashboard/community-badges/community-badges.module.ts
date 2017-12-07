import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityBadgesRoutingModule } from './community-badges-routing.module';
import { CommunityBadgesComponent } from './community-badges.component';

@NgModule({
  imports: [
    CommonModule,
    CommunityBadgesRoutingModule
  ],
  declarations: [CommunityBadgesComponent]
})
export class CommunityBadgesModule { }
