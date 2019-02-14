import { Validators } from '@angular/forms';

/**
 * ログイン
 * 入力フォーム
 */
export class LoginForm {

  /** ログインID */
  loginId: string;
  /** パスワード */
  password: string;

  static validators = {
    /** ログインID */
    loginId: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
    /** パスワード */
    password: ['', Validators.compose([Validators.required, Validators.maxLength(30)])]
  };

}
