import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../../core/core.module';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfilePageComponent } from './profile-page.component';
import { ProfileAboutComponent } from './profile-about/profile-about.component';
import { ProfileFriendComponent } from './profile-friend/profile-friend.component';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';
import { ProfileVideoComponent } from './profile-video/profile-video.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ProfilePageRoutingModule
  ],
  declarations: [
    ProfilePageComponent,
    ProfileAboutComponent,
    ProfileFriendComponent,
    ProfilePhotoComponent,
    ProfileVideoComponent
  ]
})
export class ProfilePageModule { }
