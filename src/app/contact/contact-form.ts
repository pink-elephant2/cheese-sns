import { Validators } from '@angular/forms';

/**
 * お問合せ
 * 入力フォーム
 */
export class ContactForm {

  /** 名前 */
  name: string;

  /** メールアドレス */
  mail: string;

  /** 内容 */
  content: string;

  static validators = {
    /** 名前 */
    name: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
    /** メールアドレス */
    mail: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(256)])],
    /** 内容 */
    content: ['', Validators.compose([Validators.required, Validators.maxLength(1000)])]
  };

}
