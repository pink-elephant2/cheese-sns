import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';
import { LoginForm } from 'app/login/login-form';

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
