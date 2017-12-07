import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../../core/core.module';

import { ProfileSettingRoutingModule } from './profile-setting-routing.module';
import { ProfileSettingComponent } from './profile-setting.component';
import { ProfilePersonalinfoComponent } from './profile-personalinfo/profile-personalinfo.component';
import { ProfilePersonalsettingComponent } from './profile-personalsetting/profile-personalsetting.component';
import { ProfileChangepasswordComponent } from './profile-changepassword/profile-changepassword.component';
import { ProfileHobbiesComponent } from './profile-hobbies/profile-hobbies.component';
import { ProfileHistoryComponent } from './profile-history/profile-history.component';
import { ProfileNotificationComponent } from './profile-notification/profile-notification.component';
import { ProfileChatComponent } from './profile-chat/profile-chat.component';
import { ProfileFriendrequestComponent } from './profile-friendrequest/profile-friendrequest.component';
import { ProfileFavpageComponent } from './profile-favpage/profile-favpage.component';
import { ProfileFavsettingComponent } from './profile-favsetting/profile-favsetting.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ProfileSettingRoutingModule
  ],
  declarations: [ProfileSettingComponent, ProfilePersonalinfoComponent, ProfilePersonalsettingComponent, ProfileChangepasswordComponent, ProfileHobbiesComponent, ProfileHistoryComponent, ProfileNotificationComponent, ProfileChatComponent, ProfileFriendrequestComponent, ProfileFavpageComponent, ProfileFavsettingComponent]
})
export class ProfileSettingModule { }
