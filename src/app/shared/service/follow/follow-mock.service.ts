import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { FollowService } from './follow.service';
import { Account } from '../account/account';
import { AccountMockService } from '../account';
import { Page } from 'shared/model/page';

/**
 * フォローサービス
 * モック
 */
@Injectable()
export class FollowMockService extends FollowService {

  /**
   * フォローを取得する
   */
  public getFollow(loginId: string): Observable<Page<Account>> {
    if (!loginId) {
      loginId = 'my_melody';
    }
    return of({
      content: AccountMockService.accountList.filter(account => account.loginId !== loginId)
    } as Page<Account>);
  }

  /**
   * フォローワーを取得する
   */
  public getFollower(loginId: string): Observable<Page<Account>> {
    if (!loginId) {
      loginId = 'my_melody';
    }
    return of({
      content: AccountMockService.accountList.filter(account => account.loginId !== loginId)
    } as Page<Account>);
  }

  /**
   * フォローする
   *
   * @param loginId 自分
   * @param followLoginId フォロー対象
   */
  public follow(loginId: string, followLoginId: string): Observable<boolean> {
    return of(true);
  }

  /**
   * フォローを解除する
   *
   * @param loginId 自分
   * @param followLoginId フォロー対象
   */
  public unfollow(loginId: string, followLoginId: string): Observable<boolean> {
    return of(true);
  }
}
