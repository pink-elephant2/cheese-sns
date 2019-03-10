import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from 'env/environment.prod';
import { ActivityComponent } from './activity.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ActivityFollowingComponent } from './activity-following/activity-following.component';
import { ActivityYouComponent } from './activity-you/activity-you.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    ActivityComponent,
    ActivityFollowingComponent,
    ActivityYouComponent
  ],
  exports: [ActivityComponent],
  providers: [
    environment.ActivityService
  ]
})
export class ActivityModule { }
