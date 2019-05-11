import { Validators } from '@angular/forms';

/**
 * 通報
 * 入力フォーム
 */
export class ReportForm {

  /** 理由 */
  reason: number;

  static validators = {
    /** 理由 */
    reason: ['', Validators.compose([Validators.required])]
  };

}
