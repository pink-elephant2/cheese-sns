import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Account } from './account';
import { ApiConst } from 'shared/const';
import { ProfileForm } from 'src/app/setting/setting-profile/profile-form';

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
    return this.get<Account>(url);
  }

  /**
   * プロフィールを更新する
   */
  public putProfile(form: ProfileForm): Observable<boolean> {
    return this.post<boolean>(ApiConst.PATH.ACCOUNT_PROFILE, form);
  }
}
