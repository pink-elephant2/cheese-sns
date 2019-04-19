import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from 'env/environment';
import { AppRoutingModule } from '../app-routing.module';
import { AccountComponent } from './account.component';
import { AccountPostComponent } from './account-post/account-post.component';
import { AccountFollowingComponent } from './account-following/account-following.component';
import { AccountFollowersComponent } from './account-followers/account-followers.component';
import { AccountCardModule, MyAdsenseModule } from 'shared/component';
import { NavigateService } from 'shared/service/navigate';
import { AccountImageModule } from 'shared/directive';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    AccountCardModule,
    MyAdsenseModule,
    AccountImageModule
  ],
  declarations: [
    AccountComponent,
    AccountPostComponent,
    AccountFollowingComponent,
    AccountFollowersComponent
  ],
  exports: [AccountComponent],
  providers: [
    environment.accountService,
    environment.authService,
    environment.followService,
    NavigateService
  ]
})
export class AccountModule { }
