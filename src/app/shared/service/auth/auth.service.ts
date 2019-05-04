import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { ApiService } from '../api.service';
import { LoginForm } from 'src/app/login/login-form';
import { ApiConst } from 'shared/const';

/**
 * ログインサービス
 */
@Injectable()
export class AuthService extends ApiService {

  /** ログイン状態か */
  public get authenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true' && this._loginId !== undefined;
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
    const params = new HttpParams()
      .set('loginId', form.loginId)
      .set('password', form.password);
    return this.post(ApiConst.PATH.LOGIN, params).pipe(map(ret => {
      // ログイン成功
      this._loginId = form.loginId;
      this.saveSession();
      return ret;
    }));
  }

  /**
   * ログアウト処理
   */
  public logout(): Observable<any> {
    this.removeSession();
    this._loginId = undefined;

    return this.post(ApiConst.PATH.LOGOUT);
  }

}
