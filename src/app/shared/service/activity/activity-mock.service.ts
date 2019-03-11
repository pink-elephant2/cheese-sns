import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ActivityService } from './activity.service';
import { Activity } from '.';
import { ActivityType } from './activity-type.enum';
import { PhotoMockService } from '../photo';

/**
 * アクティビティサービス
 * モック
 */
@Injectable()
export class ActivityMockService extends ActivityService {

  // TODO テストデータ
  public static activityList: Activity[] = [{
    activityType: ActivityType.comment,
    photo: PhotoMockService.photoList[0],
    account: PhotoMockService.photoList[0].account,
    createAt: new Date('2019/03/12 6:30')
  } as Activity, {
    activityType: ActivityType.flow,
    account: PhotoMockService.photoList[1].account,
    createAt: new Date('2019/03/12 0:00')
  } as Activity, {
    activityType: ActivityType.like,
    photo: PhotoMockService.photoList[2],
    account: PhotoMockService.photoList[2].account,
    createAt: new Date('2019/03/11 6:30')
  } as Activity, {
    activityType: ActivityType.newPost,
    photo: PhotoMockService.photoList[3],
    account: PhotoMockService.photoList[3].account,
    createAt: new Date('2019/02/12 6:30')
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
