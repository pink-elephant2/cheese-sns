import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent } from './top/top.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', component: TopComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
