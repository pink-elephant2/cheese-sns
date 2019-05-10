import { Component, OnInit, Input } from '@angular/core';
import { ActivityService, Activity } from 'shared/service/activity';
import { AuthService } from 'shared/service/auth';
import { Page } from 'shared/model/page';

@Component({
  selector: 'app-activity-following',
  templateUrl: './activity-following.component.html',
  styleUrls: ['./activity-following.component.scss']
})
export class ActivityFollowingComponent implements OnInit {

  /** アクティビティ */
  activityList: Activity[] = [];

  constructor(
    private activityService: ActivityService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // アクティビティ取得
    this.activityService.getFollowing(this.authService.loginId).subscribe((activityPage: Page<Activity>) => {
      this.activityList = activityPage.content;
    });
  }

}
