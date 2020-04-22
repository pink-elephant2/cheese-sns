import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { ApiConst } from 'shared/const';
import { Activity } from '.';
import { Page } from 'shared/model/page';
import { map } from 'rxjs/operators';

/**
 * アクティビティサービス
 */
@Injectable()
export class ActivityService extends ApiService {

  /**
   * フォロー中のアクティビティを取得する
   */
  public getFollowing(loginId: string): Observable<Page<Activity>> {
    const url = `${ApiConst.PATH.USER}/${loginId}/${ApiConst.PATH.ACTIVITY_FOLLOWING}`;
    return this.get<Page<Activity>>(url).pipe(map((data: Page<Activity>) => {
      data.content = data.content.filter(activity => activity !== null);
      return data;
    }));
  }

  /**
   * 自分に対するアクティビティを取得する
   */
  public getMe(loginId: string): Observable<Page<Activity>> {
    const url = `${ApiConst.PATH.USER}/${loginId}/${ApiConst.PATH.ACTIVITY_ME}`;
    return this.get<Page<Activity>>(url).pipe(map((data: Page<Activity>) => {
      data.content = data.content.filter(activity => activity !== null);
      return data;
    }));
  }
}
