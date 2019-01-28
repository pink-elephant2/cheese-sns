import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api.service';
import { Account } from './account';

/**
 * アカウントサービス
 */
@Injectable()
export class AccountService extends ApiService {

  /** エンドポイント */
  protected url = './api/account';

  /**
   * アカウントを取得する
   */
  public getAccount(loginId: string): Observable<Account> {
    const url = `${this.url}/${loginId}`;
    return this.get(url).map(data => data as Account);
  }
}
