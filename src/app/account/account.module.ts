import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from 'env/environment';
import { AppRoutingModule } from '../app-routing.module';
import { AccountComponent } from './account.component';
import { AccountPostComponent } from './account-post/account-post.component';
import { AccountFollowingComponent } from './account-following/account-following.component';
import { AccountFollowersComponent } from './account-followers/account-followers.component';
import { AccountLikeComponent } from './account-like/account-like.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    AccountComponent,
    AccountPostComponent,
    AccountFollowingComponent,
    AccountFollowersComponent,
    AccountLikeComponent
  ],
  exports: [AccountComponent],
  providers: [
    environment.AccountService,
    environment.FollowService
  ]
})
export class AccountModule { }
