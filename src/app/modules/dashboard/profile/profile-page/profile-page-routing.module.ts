import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePageComponent } from './profile-page.component';
import { ProfileAboutComponent } from './profile-about/profile-about.component';
import { ProfileFriendComponent } from './profile-friend/profile-friend.component';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';
import { ProfileVideoComponent } from './profile-video/profile-video.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent
  },
  {
    path: 'about',
    component: ProfileAboutComponent
  },
  {
    path: 'friend',
    component: ProfileFriendComponent
  },
  {
    path: 'photo',
    component: ProfilePhotoComponent
  },
  {
    path: 'video',
    component: ProfileVideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule { }
