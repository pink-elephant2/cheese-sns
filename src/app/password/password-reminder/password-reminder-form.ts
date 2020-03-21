import { Validators } from '@angular/forms';

/**
 * パスワードリマインダー
 * 入力フォーム
 */
export class PasswordReminderForm {

  /** メールアドレス */
  mail: string;

  static validators = {
    /** メールアドレス */
    mail: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(256)])]
  };

}
