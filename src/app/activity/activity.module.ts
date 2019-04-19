import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from 'env/environment';
import { ActivityComponent } from './activity.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ActivityFollowingComponent } from './activity-following/activity-following.component';
import { ActivityYouComponent } from './activity-you/activity-you.component';
import { PastDateModule } from 'shared/pipe';
import { AccountImageModule } from 'shared/directive';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PastDateModule,
    AccountImageModule
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
