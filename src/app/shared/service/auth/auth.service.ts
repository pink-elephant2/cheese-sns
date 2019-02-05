import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../api.service';
import { LoginForm } from 'app/login/login-form';

/**
 * ログインサービス
 */
@Injectable()
export class AuthService extends ApiService {

  public get authenticated() {
    return sessionStorage.getItem('isLoggedIn') === 'true';
  }

  public saveSession() {
    sessionStorage.setItem('isLoggedIn', 'true');
  }

  public removeSession() {
    sessionStorage.removeItem('isLoggedIn');
  }

  /** ログインID */
  protected _loginId: string;

  /** ログインIDを取得する */
  public get loginId() {
    return this._loginId;
  }

  /**
   * ログイン
   */
  public login(form: LoginForm): Observable<boolean> {
    const url = '/api/v1/login';
    return this.get(url, form).map(ret => {
      // ログイン成功
      this.saveSession();
      this._loginId = form.loginId;
      return ret;
    });
  }

  /**
   * ログアウト
   */
  public logout(): Observable<any> {
    this.removeSession();

    const url = '/api/v1/logout';
    return this.get(url);
  }

}
