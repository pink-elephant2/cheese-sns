import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { AccountComponent } from './account.component';
import { AccountPostComponent } from './account-post/account-post.component';
import { AccountFollowingComponent } from './account-following/account-following.component';
import { AccountFollowersComponent } from './account-followers/account-followers.component';
import { AccountLikeComponent } from './account-like/account-like.component';
import { AppRoutingModule } from '../app-routing.module';

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
    environment.AccountService
  ]
})
export class AccountModule { }
