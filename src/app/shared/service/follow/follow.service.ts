import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Account } from '../account/account';
import { ApiConst } from 'shared/const';
import { Page } from 'shared/model/page';

/**
 * フォローサービス
 */
@Injectable()
export class FollowService extends ApiService {

  /**
   * フォローを取得する
   */
  public getFollow(loginId: string): Observable<Page<Account>> {
    const url = `${ApiConst.PATH.ACCOUNT}/${loginId}/follow`;
    return this.get<Page<Account>>(url);
  }

  /**
   * フォローワーを取得する
   */
  public getFollower(loginId: string): Observable<Page<Account>> {
    const url = `${ApiConst.PATH.ACCOUNT}/${loginId}/follower`;
    return this.get<Page<Account>>(url);
  }

  /**
   * フォローする
   *
   * @param loginId フォロー対象
   */
  public follow(loginId: String): Observable<boolean> {
    const url = `${ApiConst.PATH.ACCOUNT}/follow`;
    const params = {
      loginId: loginId
    };
    return this.post<boolean>(url, params);
  }

  /**
   * フォローを解除する
   *
   * @param loginId フォロー対象
   */
  public unfollow(loginId: String): Observable<boolean> {
    const url = `${ApiConst.PATH.ACCOUNT}/unfollow`;
    const params = {
      loginId: loginId
    };
    return this.post<boolean>(url, params);
  }
}
