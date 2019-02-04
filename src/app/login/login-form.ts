import { Validators } from '@angular/forms';

/**
 * ログイン
 * 入力フォーム
 */
export class LoginForm {
  /** ログインID */
  id: string;
  /** パスワード */
  pass: string;

  static validators = {
    /** ログインID */
    id: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
    /** パスワード */
    pass: ['', Validators.compose([Validators.required, Validators.maxLength(30)])]
  };

}
