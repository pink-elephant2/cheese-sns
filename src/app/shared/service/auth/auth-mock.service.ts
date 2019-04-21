import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AuthService } from './auth.service';
import { LoginForm } from 'src/app/login/login-form';
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
      return of(false);
    }

    // ログイン成功
    this._loginId = form.loginId;
    this.saveSession();
    return of(true);
  }

  /**
   * ログアウト
   */
  public logout(): Observable<any> {
    this.removeSession();
    this._loginId = undefined;
    return of(true);
  }

}
