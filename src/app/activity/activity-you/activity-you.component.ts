import { Component, OnInit } from '@angular/core';
import { ActivityService, Activity } from 'shared/service/activity';

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
    this.activityService.getMe().subscribe((activityList: Activity[]) => {
      this.activityList = activityList;
    });
  }

}
