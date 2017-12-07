import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageModule } from './profile-page/profile-page.module';
import { ProfileSettingModule } from './profile-setting/profile-setting.module';

import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProfilePageModule,
    ProfileSettingModule,
    ProfileRoutingModule
  ],
  declarations: []
})
export class ProfileModule { }
