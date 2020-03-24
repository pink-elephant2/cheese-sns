import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from 'env/environment';
import { ActivityComponent } from './activity.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ActivityFollowingComponent } from './activity-following/activity-following.component';
import { ActivityYouComponent } from './activity-you/activity-you.component';
import { PastDateModule } from 'shared/pipe';
import { AccountImageModule } from 'shared/directive';
import { ThemeColorModule } from 'shared/directive/theme-color';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PastDateModule,
    AccountImageModule,
    ThemeColorModule
  ],
  declarations: [
    ActivityComponent,
    ActivityFollowingComponent,
    ActivityYouComponent
  ],
  exports: [ActivityComponent],
  providers: [
    environment.activityService
  ]
})
export class ActivityModule { }
