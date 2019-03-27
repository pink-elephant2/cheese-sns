import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { ApiConst } from 'shared/const';
import { Activity } from '.';
import { Page } from 'shared/model/page';

/**
 * アクティビティサービス
 */
@Injectable()
export class ActivityService extends ApiService {

  /**
   * フォロー中のアクティビティを取得する
   */
  public getFollowing(): Observable<Page<Activity>> {
    return this.get<Page<Activity>>(ApiConst.PATH.ACTIVITY_FOLLOWING);
  }

  /**
   * 自分に対するアクティビティを取得する
   */
  public getMe(): Observable<Page<Activity>> {
    return this.get<Page<Activity>>(ApiConst.PATH.ACTIVITY_ME);
  }
}
