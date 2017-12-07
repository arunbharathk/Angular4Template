import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../../core/core.module';

import { ProfileSettingRoutingModule } from './profile-setting-routing.module';
import { ProfileSettingComponent } from './profile-setting.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ProfileSettingRoutingModule
  ],
  declarations: [ProfileSettingComponent]
})
export class ProfileSettingModule { }
