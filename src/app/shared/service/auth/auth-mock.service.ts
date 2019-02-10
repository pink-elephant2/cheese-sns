import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';
import { LoginForm } from 'app/login/login-form';
import { AccountMockService } from '../account';

/**
 * ログインサービス
 * モック
 */
@Injectable()
export class AuthMockService extends AuthService {

  /**
   * ログイン
   */
  public login(form: LoginForm): Observable<boolean> {
    if (!AccountMockService.accountList.find(account => account.loginId === form.loginId)) {
      // ログイン失敗
      return Observable.of(false);
    }

    // ログイン成功
    this.saveSession();
    this._loginId = form.loginId;
    return Observable.of(true);
  }

  /**
   * ログアウト
   */
  public logout(): Observable<any> {
    this.removeSession();
    return Observable.of(true);
  }

}
