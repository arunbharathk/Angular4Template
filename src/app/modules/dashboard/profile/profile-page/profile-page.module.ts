import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../../core/core.module';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfilePageComponent } from './profile-page.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePageComponent]
})
export class ProfilePageModule { }
