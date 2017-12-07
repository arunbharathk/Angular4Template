import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent
  },
  {
    path: 'setting',
    component: ProfileSettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
