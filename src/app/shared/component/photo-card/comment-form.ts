import { Validators } from '@angular/forms';

/**
 * コメント
 * 入力フォーム
 */
export class CommentForm {

  /** コメント */
  comment: string;

  static validators = {
    /** コメント */
    comment: ['', Validators.compose([Validators.required, Validators.maxLength(120)])]
  };

}
