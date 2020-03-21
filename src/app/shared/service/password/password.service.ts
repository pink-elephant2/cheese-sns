import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { PasswordReminderForm } from 'src/app/password/password-reminder/password-reminder-form';
import { PasswordReminderCbkForm } from 'src/app/password/password-reminder-cbk/password-reminder-cbk-form';

/**
 * パスワードサービス
 */
@Injectable()
export class PasswordService extends ApiService {

  /**
   * リマインダーメールを送信する
   */
  public sendReminder(form: PasswordReminderForm): Observable<boolean> {
    return this.post<boolean>('/api/v1/password/reminder', form);
  }

  /**
   * ワンタイムトークンをチェックする
   */
  public checkToken(token: string): Observable<boolean> {
    const url = `/api/v1/password/reminder/token/${token}`;
    return this.get<boolean>(url);
  }

  /**
   * パスワードを再設定する
   */
  public resetPassword(form: PasswordReminderCbkForm): Observable<boolean> {
    return this.post<boolean>('/api/v1/password/reset', form);
  }
}
