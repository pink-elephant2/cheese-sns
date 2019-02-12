import { Validators } from '@angular/forms';

/**
 * プロフィール編集
 * 入力フォーム
 */
export class ProfileForm {
  /** アカウント名 */
  name: string;
  /** 自己紹介 */
  description: string;
  /** 場所 */
  place: string;
  /** ウェブサイト */
  url: string;

  static validators = {
    /** アカウント名 */
    name: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
    /** 自己紹介 */
    description: ['', Validators.compose([Validators.maxLength(120)])],
    /** 場所 */
    place: ['', Validators.compose([Validators.maxLength(30)])],
    /** ウェブサイト */
    url: ['', Validators.compose([Validators.maxLength(100)])]
  };

}
