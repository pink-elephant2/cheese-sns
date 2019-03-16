import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  public getAccount(loginId?: string): Observable<Account> {
    const url = `${ApiConst.PATH.ACCOUNT}/${loginId}`;
    return this.get(url).pipe(map(data => data as Account));
  }

  /**
   * プロフィールを更新する
   */
  public putProfile(form: ProfileForm): Observable<boolean> {
    return this.post(ApiConst.PATH.ACCOUNT_PROFILE, form).pipe(map(ret => {
      return Boolean(ret);
    }));
  }
}
