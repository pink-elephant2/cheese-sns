import { Component, OnInit, Input } from '@angular/core';
import { ActivityService, Activity } from 'shared/service/activity';
import { Page } from 'shared/model/page';

@Component({
  selector: 'app-activity-following',
  templateUrl: './activity-following.component.html',
  styleUrls: ['./activity-following.component.scss']
})
export class ActivityFollowingComponent implements OnInit {

  /** アクティビティ */
  activityList: Activity[] = [];

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    // アクティビティ取得
    this.activityService.getFollowing().subscribe((activityPage: Page<Activity>) => {
      this.activityList = activityPage.content;
    });
  }

}
