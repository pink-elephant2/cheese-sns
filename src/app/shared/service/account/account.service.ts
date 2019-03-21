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
  public putProfile(form: ProfileForm, file: File): Observable<boolean> {
    const data = new FormData();
    data.append('upfile', file, form.upfile);
    data.append('name', form.name);
    data.append('description', form.description);
    data.append('place', form.place);
    data.append('url', form.url);
    return this.post<boolean>(ApiConst.PATH.ACCOUNT_PROFILE, data);
  }
}
