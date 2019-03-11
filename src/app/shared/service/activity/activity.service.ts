import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../api.service';
import { ApiConst } from 'shared/const';
import { Activity } from '.';

/**
 * アクティビティサービス
 */
@Injectable()
export class ActivityService extends ApiService {

  /**
   * フォロー中のアクティビティを取得する
   */
  public getFollowing(): Observable<Activity[]> {
    return this.get(ApiConst.PATH.ACTIVITY_FOLLOWING).pipe(map(data => data as Activity[]));
  }

  /**
   * 自分に対するアクティビティを取得する
   */
  public getMe(): Observable<Activity[]> {
    return this.get(ApiConst.PATH.ACTIVITY_ME).pipe(map(data => data as Activity[]));
  }
}
