import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Account } from './account';
import { ApiConst } from 'shared/const';
import { ProfileForm } from 'src/app/setting/setting-profile/profile-form';
import { SignupForm } from 'src/app/signup/signup-form';
import { ImageForm } from 'src/app/setting/setting-profile/image-form';

/**
 * アカウントサービス
 */
@Injectable()
export class AccountService extends ApiService {

  /**
   * アカウントを作成する
   */
  public createAccount(form: SignupForm): Observable<boolean> {
    return this.post<boolean>(ApiConst.PATH.ACCOUNT, form);
  }

  /**
   * アカウントを取得する
   */
  public getAccount(loginId: string): Observable<Account> {
    const url = `${ApiConst.PATH.ACCOUNT}/${loginId}`;
    return this.get<Account>(url);
  }

  /**
   * プロフィールを更新する
   */
  public putProfile(loginId: string, form: ProfileForm): Observable<boolean> {
    const url = `${ApiConst.PATH.USER}/${loginId}/${ApiConst.PATH.ACCOUNT_PROFILE}`;
    return this.post<boolean>(url, form);
  }

  /**
   * 画像を更新する
   */
  public putImage(loginId: string, form: ImageForm, file: File): Observable<boolean> {
    const url = `${ApiConst.PATH.USER}/${loginId}/${ApiConst.PATH.ACCOUNT_IMAGE}`;
    const data = new FormData();
    data.append('upfile', file, form.upfile);
    return this.post<boolean>(url, data);
  }

  /**
   * 通報する
   */
  public report(loginId: string, reason: number): Observable<boolean> {
    const url = `${ApiConst.PATH.ACCOUNT}/${loginId}/${ApiConst.PATH.ACCOUNT_REPORT}`;
    const params = {
      reason: reason
    };
    return this.post<boolean>(url, params);
  }

  /**
   * ブロックする
   */
  public block(loginId: string): Observable<boolean> {
    const url = `${ApiConst.PATH.ACCOUNT}/${loginId}/${ApiConst.PATH.ACCOUNT_BLOCK}`;
    return this.post<boolean>(url);
  }
}
