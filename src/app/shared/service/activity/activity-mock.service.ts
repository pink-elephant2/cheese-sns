import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ActivityService } from './activity.service';
import { Activity } from '.';

/**
 * アクティビティサービス
 * モック
 */
@Injectable()
export class ActivityMockService extends ActivityService {

  // TODO テストデータ
  public static activityList: Activity[] = [{
  } as Activity
  ];

  /**
   * フォロー中のアクティビティを取得する
   */
  public getFollowing(): Observable<Activity[]> {
    return of(ActivityMockService.activityList);
  }

  /**
   * 自分に対するアクティビティを取得する
   */
  public getMe(): Observable<Activity[]> {
    return of(ActivityMockService.activityList);
  }
}
