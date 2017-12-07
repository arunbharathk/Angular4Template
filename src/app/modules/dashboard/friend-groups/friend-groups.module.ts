import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module'

import { FriendGroupsRoutingModule } from './friend-groups-routing.module';
import { FriendGroupsComponent } from './friend-groups.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FriendGroupsRoutingModule
  ],
  declarations: [FriendGroupsComponent]
})
export class FriendGroupsModule { }
