import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ActivityService } from './activity.service';
import { Activity } from '.';
import { ActivityType } from './activity-type.enum';
import { PhotoMockService } from '../photo';
import { Page } from 'shared/model/page';

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
    createdAt: new Date('2019/03/12 6:30')
  } as Activity, {
    activityType: ActivityType.follow,
    account: PhotoMockService.photoList[1].account,
    createdAt: new Date('2019/03/12 0:00')
  } as Activity, {
    activityType: ActivityType.like,
    photo: PhotoMockService.photoList[2],
    account: PhotoMockService.photoList[2].account,
    createdAt: new Date('2019/03/11 6:30')
  } as Activity, {
    activityType: ActivityType.newPost,
    photo: PhotoMockService.photoList[3],
    account: PhotoMockService.photoList[3].account,
    createdAt: new Date('2019/02/12 6:30')
  } as Activity, {
    activityType: ActivityType.commentLike,
    photo: PhotoMockService.photoList[2],
    account: PhotoMockService.photoList[2].account,
    createdAt: new Date('2019/02/12 6:30')
  } as Activity
  ];

  /**
   * フォロー中のアクティビティを取得する
   */
  public getFollowing(loginId: string): Observable<Page<Activity>> {
    return of({
      content: ActivityMockService.activityList
    } as Page<Activity>);
  }

  /**
   * 自分に対するアクティビティを取得する
   */
  public getMe(loginId: string): Observable<Page<Activity>> {
    return of({
      content: ActivityMockService.activityList
    } as Page<Activity>);
  }
}
