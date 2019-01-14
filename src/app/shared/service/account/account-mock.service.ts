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

  /**
   * アカウントを取得する
   */
  public getAccount(loginId: string): Observable<Account> {
    let account = new Account();
    if (loginId) {
      account = {
        id: 2,
        loginId: 'ki_ri_mi',
        name: 'KIRIMIちゃん.',
        description: 'ラブ！サーモン！>°))))◁'
      } as Account;
    } else {
      account = {
        id: 1,
        loginId: 'my_melody',
        name: 'マイメロディ',
        description: 'おはよう♪　あさごはん　ちゃんとたべた〜？　いっしゅうかん　がんばろうね♪'
      } as Account;
    }
    return Observable.of(account);
  }
}
