import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileSettingComponent } from './profile-setting.component';
import { ProfileChangepasswordComponent } from './profile-changepassword/profile-changepassword.component';
import { ProfileChatComponent } from './profile-chat/profile-chat.component';
import { ProfileFavpageComponent } from './profile-favpage/profile-favpage.component';
import { ProfileFavsettingComponent } from './profile-favsetting/profile-favsetting.component';
import { ProfileFriendrequestComponent } from './profile-friendrequest/profile-friendrequest.component';
import { ProfileHistoryComponent } from './profile-history/profile-history.component';
import { ProfileHobbiesComponent } from './profile-hobbies/profile-hobbies.component';
import { ProfileNotificationComponent } from './profile-notification/profile-notification.component';
import { ProfilePersonalinfoComponent } from './profile-personalinfo/profile-personalinfo.component';
import { ProfilePersonalsettingComponent } from './profile-personalsetting/profile-personalsetting.component';
import { ProfileFriendComponent } from '../profile-page/profile-friend/profile-friend.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileSettingComponent
  },
  {
    path: 'personalinfo',
    component: ProfilePersonalinfoComponent
  },
  {
    path: 'personalsetting',
    component: ProfilePersonalsettingComponent
  },
  {
    path: 'changepassword',
    component: ProfileChangepasswordComponent
  },
  {
    path: 'hobbies',
    component: ProfileHobbiesComponent
  },
  {
    path: 'history',
    component: ProfileHistoryComponent
  },
  {
    path: 'notification',
    component: ProfileNotificationComponent
  },
  {
    path: 'chat',
    component: ProfileChatComponent
  },
  {
    path: 'friendrequest',
    component: ProfileFriendrequestComponent
  },
  {
    path: 'favpage',
    component: ProfileFavpageComponent
  },
  {
    path: 'favsetting',
    component: ProfileFavsettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileSettingRoutingModule { }
