import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { PasswordReminderForm } from './password-reminder-form';
import { PasswordService } from 'shared/service/password';
import { LoadingService } from 'shared/service/loading';
import { GaService } from 'shared/service/ga';

/**
 * パスワードリマインダー
 */
@Component({
  selector: 'app-password-reminder',
  templateUrl: './password-reminder.component.html',
  styleUrls: ['./password-reminder.component.scss']
})
export class PasswordReminderComponent implements OnInit {

  /** 入力フォーム */
  form: FormGroup;

  /** バリデーション失敗 */
  isInValid: boolean;
  /** APIエラー */
  isError: boolean;
  /** 送信完了 */
  isCompleted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private loadingService: LoadingService,
    private passwordService: PasswordService,
    private gaService: GaService
  ) {
    this.form = this.formBuilder.group(PasswordReminderForm.validators);
  }

  ngOnInit() {
    // 文字数カウント
    window['$']('input, textarea').characterCounter();
  }

  /**
   * 送信ボタン
   * @param form 入力フォーム
   * @param isValid 有効か
   */
  onSubmit(form: PasswordReminderForm, isValid: boolean) {
    if (!isValid) {
      return;
    }
    this.isInValid = false;
    this.isError = false;

    // リマインダー送信
    this.loadingService.setLoading(true);
    this.passwordService.sendReminder(this.form.value).subscribe((ret: boolean) => {
      this.loadingService.setLoading(false);

      if (ret) {
        // tracking
        this.gaService.sendEvent('password-reminder', 'password-reminder', 'click', form.mail);

        // 送信完了
        this.isCompleted = true;
      } else {
        this.isInValid = true;
      }
    }, (error: Response) => {
      this.loadingService.setLoading(false);

      switch (error.status) {
        // メールアドレスが登録されていない場合
        case 403:
          this.isInValid = true;
          break;
        case 500:
        default:
          this.isError = true;
          break;
      }
    });
  }
}
