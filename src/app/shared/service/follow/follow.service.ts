import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../api.service';
import { Account } from '../account/account';
import { ApiConst } from 'shared/const';

/**
 * フォローサービス
 */
@Injectable()
export class FollowService extends ApiService {

  /**
   * フォローを取得する
   */
  public getFollow(loginId: string): Observable<Account[]> {
    const url = `${ApiConst.PATH.ACCOUNT}/${loginId}/follow`;
    return this.get(url).map(data => data as Account[]);
  }

  /**
   * フォローワーを取得する
   */
  public getFollower(loginId: string): Observable<Account[]> {
    const url = `${ApiConst.PATH.ACCOUNT}/${loginId}/follower`;
    return this.get(url).map(data => data as Account[]);
  }
}
