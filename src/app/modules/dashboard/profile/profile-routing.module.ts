import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './profile-page/profile-page.module#ProfilePageModule'
  },
  {
    path: 'setting',
    loadChildren: './profile-setting/profile-setting.module#ProfileSettingModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
