import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { FollowService } from './follow.service';
import { Account } from '../account/account';
import { AccountMockService } from '../account';

/**
 * フォローサービス
 * モック
 */
@Injectable()
export class FollowMockService extends FollowService {

  /**
   * フォローを取得する
   */
  public getFollow(loginId: string): Observable<Account[]> {
    if (!loginId) {
      loginId = 'my_melody';
    }
    return of(AccountMockService.accountList.filter(account => account.loginId !== loginId));
  }

  /**
   * フォローワーを取得する
   */
  public getFollower(loginId: string): Observable<Account[]> {
    if (!loginId) {
      loginId = 'my_melody';
    }
    return of(AccountMockService.accountList.filter(account => account.loginId !== loginId));
  }
}
