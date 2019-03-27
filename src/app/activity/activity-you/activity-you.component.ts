import { Component, OnInit } from '@angular/core';
import { ActivityService, Activity } from 'shared/service/activity';
import { Page } from 'shared/model/page';

@Component({
  selector: 'app-activity-you',
  templateUrl: './activity-you.component.html',
  styleUrls: ['./activity-you.component.scss']
})
export class ActivityYouComponent implements OnInit {

  /** アクティビティ */
  activityList: Activity[] = [];

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    // アクティビティ取得
    this.activityService.getMe().subscribe((activityPage: Page<Activity>) => {
      this.activityList = activityPage.content;
    });
  }

}
