import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../api.service';
import { Account } from './account';
import { ApiConst } from 'shared/const';

/**
 * アカウントサービス
 */
@Injectable()
export class AccountService extends ApiService {

  /**
   * アカウントを取得する
   */
  public getAccount(loginId: string): Observable<Account> {
    const url = `${ApiConst.PATH.ACCOUNT}/${loginId}`;
    return this.get(url).map(data => data as Account);
  }
}
