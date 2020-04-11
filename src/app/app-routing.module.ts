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
import { SearchComponent } from './search/search.component';
import { HashtagComponent } from './hashtag/hashtag.component';
import { BookmarkComponent } from './bookmark/bookmark.component';

const routes: Routes = [
  { path: '', component: TopComponent, data: { infinityScroll: true } },
  { path: 'home', component: TopComponent, data: { infinityScroll: true } }, // PWA
  { path: 'login', component: LoginComponent, data: { title: 'ログイン' } },
  { path: 'logout', component: LogoutComponent, data: { title: 'ログアウト' } },
  { path: 'maintenance', loadChildren: () => import('./maintenance/maintenance.module').then(m => m.MaintenanceModule) },
  { path: 'signup', component: SignupComponent, data: { title: 'ユーザー登録' } },
  { path: 'password', loadChildren: () => import('./password/password.module').then(m => m.PasswordModule) },
  { path: 'account', component: AccountComponent, data: { title: 'マイページ' }, canActivate: [AuthGuard] },
  { path: 'create', component: CreateComponent, data: { title: '投稿' }, canActivate: [AuthGuard] },
  { path: 'activity', component: ActivityComponent, data: { title: 'アクティビティ' }, canActivate: [AuthGuard] },
  { path: 'photo/:photoId', component: PhotoComponent, data: { title: '写真' } },
  { path: 'search', component: SearchComponent, data: { title: '検索' } },
  { path: 'hashtag/:tag', component: HashtagComponent, data: { title: 'タグ検索' } },
  { path: 'bookmark', component: BookmarkComponent, data: { title: 'ブックマーク' } },
  { path: 'privacy', loadChildren: () => import('./privacy/privacy.module').then(m => m.PrivacyModule) },
  { path: 'terms', loadChildren: () => import('./terms/terms.module').then(m => m.TermsModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule), canActivate: [AuthGuard] },
  { path: ':loginId', component: AccountComponent, data: { title: 'アカウント' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
