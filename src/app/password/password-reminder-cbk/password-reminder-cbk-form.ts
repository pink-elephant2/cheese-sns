import { Validators } from '@angular/forms';

/**
 * パスワードリマインダー
 * メールからのコールバック
 * 入力フォーム
 */
export class PasswordReminderCbkForm {

  /** メールアドレス */
  mail: string;
  /** パスワード */
  password: string;
  /** ワンタイムトークン(hidden) */
  token: string;

  static validators = {
    /** メールアドレス */
    mail: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(256)])],
    /** パスワード */
    password: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
    /** ワンタイムトークン */
    token: ['', Validators.compose([Validators.required, Validators.maxLength(100)])]
  };

}
