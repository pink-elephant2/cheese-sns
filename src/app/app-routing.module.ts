import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'shared/service/auth';
import { TopComponent } from './top/top.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { AccountComponent } from './account/account.component';
import { CreateComponent } from './create/create.component';
import { ActivityComponent } from './activity/activity.component';
import { PhotoComponent } from './photo/photo.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { ContactComponent } from './contact/contact.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

const routes: Routes = [
  { path: '', component: TopComponent, data: { infinityScroll: true } },
  { path: 'login', component: LoginComponent, data: { title: 'ログイン' } },
  { path: 'logout', component: LogoutComponent, data: { title: 'ログアウト' } },
  { path: 'maintenance', component: MaintenanceComponent, data: { title: 'メンテナンス中' } },
  { path: 'signup', component: SignupComponent, data: { title: 'ユーザー登録' } },
  { path: 'account', component: AccountComponent, data: { title: 'マイページ' }, canActivate: [AuthGuard] },
  { path: 'create', component: CreateComponent, data: { title: '投稿' }, canActivate: [AuthGuard] },
  { path: 'activity', component: ActivityComponent, data: { title: 'アクティビティ' }, canActivate: [AuthGuard] },
  { path: 'photo/:photoId', component: PhotoComponent, data: { title: '写真' } },
  { path: 'privacy', component: PrivacyComponent, data: { title: 'プライバシーポリシー' } },
  { path: 'terms', component: TermsComponent, data: { title: '利用規約' } },
  { path: 'contact', component: ContactComponent, data: { title: 'お問合せ' } },
  { path: 'setting', loadChildren: './setting/setting.module#SettingModule', canActivate: [AuthGuard] },
  { path: ':loginId', component: AccountComponent, data: { title: 'アカウント' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
