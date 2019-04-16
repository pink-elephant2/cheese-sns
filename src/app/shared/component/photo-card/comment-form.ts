import { Validators } from '@angular/forms';

/**
 * コメント
 * 入力フォーム
 */
export class CommentForm {

  /** コメント */
  content: string;

  static validators = {
    /** コメント */
    content: ['', Validators.compose([Validators.required, Validators.maxLength(120)])]
  };

}
