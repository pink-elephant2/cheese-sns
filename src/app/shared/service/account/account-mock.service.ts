import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AccountService } from './account.service';
import { Account } from './account';

/**
 * アカウントサービス
 * モック
 */
@Injectable()
export class AccountMockService extends AccountService {

  public static accountList: Account[] = [{
    id: 1,
    loginId: 'my_melody',
    name: 'マイメロディ',
    description: 'おはよう♪　あさごはん　ちゃんとたべた〜？　いっしゅうかん　がんばろうね♪'
  } as Account, {
    id: 2,
    loginId: 'ki_ri_mi',
    name: 'KIRIMIちゃん.',
    description: 'ラブ！サーモン！>°))))◁'
  } as Account, {
    id: 3,
    loginId: 'gudetama',
    name: 'ぐでたま',
    description: 'だるい'
  } as Account
  ];

  /**
   * アカウントを取得する
   */
  public getAccount(loginId: string): Observable<Account> {
    if (!loginId) {
      loginId = 'my_melody';
    }
    return Observable.of(AccountMockService.accountList.find(account => account.loginId === loginId));
  }
}
