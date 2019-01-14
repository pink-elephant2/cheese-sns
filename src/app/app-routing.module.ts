import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent } from './top/top.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { CreateComponent } from './create/create.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent },
  { path: 'create', component: CreateComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'setting', loadChildren: './setting/setting.module#SettingModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
