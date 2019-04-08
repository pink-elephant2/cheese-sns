import { Validators } from '@angular/forms';

/**
 * アカウント作成
 * 入力フォーム
 */
export class SignupForm {

  /** ログインID */
  loginId: string;
  /** メールアドレス */
  mail: string;
  /** パスワード */
  password: string;

  static validators = {
    /** ログインID */
    loginId: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
    /** メールアドレス */
    mail: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(256)])],
    /** パスワード */
    password: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
    /** 利用規約に同意 */
    isAgreeTerm: ['', Validators.compose([Validators.required])]
  };

}
