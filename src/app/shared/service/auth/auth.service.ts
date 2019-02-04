import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../api.service';
import { LoginForm } from 'app/login/login-form';

/**
 * ログインサービス
 */
@Injectable()
export class AuthService extends ApiService {

  public authenticated() {
    return sessionStorage.getItem('isLoggedIn') === 'true';
  }

  /**
   * ログイン
   */
  public login(form: LoginForm): Observable<boolean> {
    const url = './api/login';
    return this.post(url, form).map(ret => {
      // ログイン成功
      sessionStorage.setItem('isLoggedIn', 'true');
      return ret;
    });
  }

  /**
   * ログアウト
   */
  public logout(): Observable<any> {
    sessionStorage.removeItem('isLoggedIn');

    const url = './api/logout';
    return this.get(url);
  }

}
