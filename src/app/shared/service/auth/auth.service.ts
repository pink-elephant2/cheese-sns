import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

import { ApiService } from '../api.service';
import { LoginForm } from 'app/login/login-form';
import { ApiConst } from 'shared/const';

/**
 * ログインサービス
 */
@Injectable()
export class AuthService extends ApiService {

  /** ログイン状態か */
  public get authenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  /** ログイン検知 */
  public isAuthenticated = new BehaviorSubject<boolean>(null);

  /**
   * ローディング状態を設定する
   */
  public setAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticated.next(isAuthenticated);
  }

  /**
   * ログインセッションを保存する
   */
  public saveSession() {
    this.setAuthenticated(true);
    localStorage.setItem('isLoggedIn', 'true');
  }

  /**
   * ログインセッションを破棄する
   */
  public removeSession() {
    this.setAuthenticated(false);
    localStorage.removeItem('isLoggedIn');
  }

  /** ログインID */
  protected _loginId: string;

  /** ログインIDを取得する */
  public get loginId() {
    return this._loginId;
  }

  /**
   * ログイン処理
   */
  public login(form: LoginForm): Observable<boolean> {
    return this.get(ApiConst.PATH.LOGIN, form).map(ret => {
      // ログイン成功
      this.saveSession();
      this._loginId = form.loginId;
      return ret;
    });
  }

  /**
   * ログアウト処理
   */
  public logout(): Observable<any> {
    this.removeSession();

    return this.get(ApiConst.PATH.LOGOUT);
  }

}
