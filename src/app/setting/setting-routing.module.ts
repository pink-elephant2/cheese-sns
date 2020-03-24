import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'shared/service/auth';
import { SettingComponent } from './setting.component';
import { SettingProfileComponent } from './setting-profile/setting-profile.component';
import { SettingDisplayComponent } from './setting-display/setting-display.component';

const routes: Routes = [
  {
    path: '', component: SettingComponent,
    children: [
      { path: 'profile', component: SettingProfileComponent, data: { title: 'プロフィール編集' }, canActivate: [AuthGuard] },
      { path: 'display', component: SettingDisplayComponent, data: { title: '表示設定' }, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SettingRoutingModule { }
