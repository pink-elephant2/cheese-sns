import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PasswordService } from 'shared/service/password';
import { PasswordReminderCbkForm } from './password-reminder-cbk-form';
import { LoadingService } from 'shared/service/loading';
import { GaService } from 'shared/service/ga';
import { APP_TITLE } from 'shared/const';

/**
 * パスワードリマインダー
 * メールからのコールバック
 */
@Component({
  selector: 'app-password-reminder-cbk',
  templateUrl: './password-reminder-cbk.component.html',
  styleUrls: ['./password-reminder-cbk.component.scss']
})
export class PasswordReminderCbkComponent implements OnInit, OnDestroy {

  /** タイトル */
  title = APP_TITLE;

  /** 入力フォーム */
  form: FormGroup;

  /** 有効期限切れ */
  isExpired: boolean;
  /** バリデーション失敗 */
  isInValid: boolean;
  /** APIエラー */
  isError: boolean;
  /** 送信完了 */
  isCompleted: boolean;

  private sub: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private passwordService: PasswordService,
    private gaService: GaService
  ) {
    this.form = this.formBuilder.group(PasswordReminderCbkForm.validators);
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe((params: { token: string }) => {
      // ワンタイムトークンチェック
      if (!params.token) {
        // URL不正
        this.isExpired = true;
        return;
      }
      this.loadingService.setLoading(true);
      this.passwordService.checkToken(encodeURIComponent(params.token)).subscribe(ret => {
        this.loadingService.setLoading(false);

        if (!ret) {
          // TODO 不正なトークン
          this.isExpired = true;
        } else {
          // hiddenにセット
          this.form.controls.token.setValue(params.token);
        }
      }, () => {
        this.loadingService.setLoading(false);

        // 有効期限切れ
        this.isExpired = true;
      });
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   * 送信ボタン
   * @param form 入力フォーム
   * @param isValid 有効か
   */
  onSubmit(form: PasswordReminderCbkForm, isValid: boolean) {
    if (!isValid) {
      return;
    }
    this.isInValid = false;
    this.isError = false;

    // パスワード更新
    this.loadingService.setLoading(true);
    this.passwordService.resetPassword(this.form.value).subscribe((ret: boolean) => {
      this.loadingService.setLoading(false);

      if (ret) {
        // tracking
        this.gaService.sendEvent('password-reminder-cbk', 'password-reminder-cbk', 'click', form.mail);

        // 送信完了
        this.isCompleted = true;
      } else {
        this.isInValid = true;
      }
    }, (error: Response) => {
      this.loadingService.setLoading(false);

      switch (error.status) {
        case 403:
          this.isInValid = true;
          break;
        // メールアドレスが登録されていない場合
        case 404:
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
