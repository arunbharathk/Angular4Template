import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../core/core.module'

import { FriendsBirthdaysRoutingModule } from './friends-birthdays-routing.module';
import { FriendsBirthdaysComponent } from './friends-birthdays.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FriendsBirthdaysRoutingModule
  ],
  declarations: [FriendsBirthdaysComponent]
})
export class FriendsBirthdaysModule { }
